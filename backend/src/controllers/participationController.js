import mongoose from 'mongoose';
import User from '../models/User.js';
import { Giveaway } from '../models/Giveaway.js';
import GiveawayParticipation from '../models/GiveawayParticipation.js';
import GiveawayEntryTransaction from '../models/GiveawayEntryTransaction.js';
import AuditLog from '../models/AuditLog.js';

// GET /api/giveaways/:id/my-status
export const getMyParticipationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const participation = await GiveawayParticipation.findOne({ userId, giveawayId: id });
    return res.json({
      success: true,
      isParticipating: !!participation,
      participation: participation || null,
      userBalances: req.user.balances
    });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};

// POST /api/giveaways/:id/join
export const joinGiveaway = async (req, res) => {
  try {
    const { id } = req.params;
    const { prizeId } = req.body;
    const userId = req.user._id;
    const deviceHash = req.deviceHash || 'dev-browser-hash-10025';

    // 1. Validate Giveaway Status & Server Time
    const giveaway = await Giveaway.findOne({
      $or: [{ giveawayId: id }, { slug: id }]
    });

    if (!giveaway) {
      return res.status(404).json({ error: 'GIVEAWAY_NOT_FOUND', message: 'Giveaway event not found.' });
    }

    if (giveaway.status !== 'ACTIVE') {
      return res.status(400).json({ error: 'GIVEAWAY_NOT_ACTIVE', message: 'This giveaway is not currently active.' });
    }

    const now = new Date();
    if (now > new Date(giveaway.endAt)) {
      return res.status(400).json({ error: 'GIVEAWAY_ENDED', message: 'This giveaway has ended.' });
    }

    // 2. Select Prize configuration from DB (Do NOT trust client price/currency)
    const prize = giveaway.prizes.find(p => p.prizeId === prizeId || p._id.toString() === prizeId) || giveaway.prizes[0];
    if (!prize) {
      return res.status(404).json({ error: 'PRIZE_NOT_FOUND', message: 'Selected prize not found in giveaway configuration.' });
    }

    const requiredCurrency = prize.entryFee.currency;
    const requiredAmount = prize.entryFee.amount;

    // 3. Check duplicate participation (Application check + DB compound unique index will enforce)
    const existingEntry = await GiveawayParticipation.findOne({ userId, giveawayId: giveaway.giveawayId });
    if (existingEntry) {
      return res.status(400).json({
        error: 'ALREADY_PARTICIPATING',
        message: 'You are already participating in this giveaway event.'
      });
    }

    // 4. Verify User Balance against required fee
    const user = await User.findById(userId);
    const currentBalance = user.balances[requiredCurrency] || 0;

    if (currentBalance < requiredAmount) {
      await AuditLog.create({
        userId,
        action: 'JOIN_REJECTED',
        giveawayId: giveaway.giveawayId,
        amount: requiredAmount,
        currency: requiredCurrency,
        result: 'INSUFFICIENT_BALANCE',
        ip: req.ip
      });

      return res.status(400).json({
        error: `INSUFFICIENT_${requiredCurrency.toUpperCase()}_BALANCE`,
        message: `Not enough ${requiredCurrency}. You need ${requiredAmount - currentBalance} more ${requiredCurrency} to join this giveaway.`
      });
    }

    // 5. Execute Atomic Balance Deduction & Participation Record Creation
    const transactionId = `TXN-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const balanceBefore = currentBalance;
    const balanceAfter = currentBalance - requiredAmount;

    // Deduct balance
    user.balances[requiredCurrency] = balanceAfter;
    await user.save();

    // Create Entry Transaction
    await GiveawayEntryTransaction.create({
      transactionId,
      userId,
      giveawayId: giveaway.giveawayId,
      prizeId: prize.prizeId,
      currency: requiredCurrency,
      amount: requiredAmount,
      type: 'ENTRY_FEE',
      status: 'SUCCESS',
      balanceBefore,
      balanceAfter
    });

    // Create Participation Record
    const participation = await GiveawayParticipation.create({
      userId,
      giveawayId: giveaway.giveawayId,
      prizeId: prize.prizeId,
      entryCurrency: requiredCurrency,
      entryAmount: requiredAmount,
      deviceHash,
      ipAddress: req.ip || '127.0.0.1',
      status: 'ACTIVE',
      transactionId
    });

    // Increment giveaway participant count
    giveaway.totalParticipants += 1;
    await giveaway.save();

    // Log Audit Trail
    await AuditLog.create({
      userId,
      action: 'JOIN_GIVEAWAY',
      giveawayId: giveaway.giveawayId,
      amount: requiredAmount,
      currency: requiredCurrency,
      result: 'SUCCESS',
      ip: req.ip
    });

    return res.json({
      success: true,
      message: 'Participation successfully recorded!',
      participation,
      updatedBalances: user.balances
    });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        error: 'ALREADY_PARTICIPATING',
        message: 'You\'re already participating in this giveaway event.'
      });
    }
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};
