import PrizeClaim from '../models/PrizeClaim.js';
import GiveawayWinner from '../models/GiveawayWinner.js';
import { Giveaway } from '../models/Giveaway.js';
import AuditLog from '../models/AuditLog.js';

// GET /api/giveaways/:id/my-claim
export const getMyClaimStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    // Check if user is a winner in this giveaway
    const winner = await GiveawayWinner.findOne({ giveawayId: id, userId });
    if (!winner) {
      return res.json({
        isWinner: false,
        winner: null,
        claim: null
      });
    }

    const claim = await PrizeClaim.findOne({ winnerId: winner._id });
    return res.json({
      isWinner: true,
      winner,
      claim: claim || null
    });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};

// POST /api/giveaways/:id/claim
export const submitPrizeClaim = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const { claimType, physicalDetails, giftCardEmail } = req.body;

    // 1. Mandatory requirement 34: Check authenticatedUserId === winner.userId
    const winner = await GiveawayWinner.findOne({ giveawayId: id, userId });
    if (!winner) {
      return res.status(403).json({
        error: 'CLAIM_NOT_ALLOWED',
        message: 'You are not listed as a verified winner for this giveaway.'
      });
    }

    // 2. Fetch Giveaway & Prize to confirm prize type server-side
    const giveaway = await Giveaway.findOne({ giveawayId: id });
    const prize = giveaway?.prizes.find(p => p.prizeId === winner.prizeId) || giveaway?.prizes[0];
    const actualClaimType = prize ? prize.prizeType : claimType;

    // 3. Server-side validation
    if (actualClaimType === 'PHYSICAL') {
      if (!physicalDetails || !physicalDetails.fullName || !physicalDetails.phone || !physicalDetails.address || !physicalDetails.city || !physicalDetails.state || !physicalDetails.pinCode) {
        return res.status(400).json({
          error: 'MISSING_FIELDS',
          message: 'Please fill in all required physical address fields (Name, Phone, Address, City, State, PIN code).'
        });
      }
    } else if (actualClaimType === 'GIFT_CARD') {
      if (!giftCardEmail || !giftCardEmail.includes('@')) {
        return res.status(400).json({
          error: 'INVALID_EMAIL',
          message: 'Please provide a valid delivery email address for your gift card.'
        });
      }
    }

    // 4. Upsert Prize Claim
    let claim = await PrizeClaim.findOne({ winnerId: winner._id });
    if (!claim) {
      claim = new PrizeClaim({
        winnerId: winner._id,
        giveawayId: id,
        prizeId: winner.prizeId,
        userId,
        claimType: actualClaimType
      });
    }

    claim.physicalDetails = physicalDetails;
    claim.giftCardEmail = giftCardEmail;
    claim.status = 'SUBMITTED';
    claim.updatedAt = new Date();
    await claim.save();

    // Update Winner Status
    winner.status = 'CLAIMED';
    await winner.save();

    await AuditLog.create({
      userId,
      action: 'CLAIM_SUBMITTED',
      giveawayId: id,
      result: 'SUCCESS',
      ip: req.ip
    });

    return res.json({
      success: true,
      message: 'Prize claim details successfully submitted! Our team is processing your reward.',
      claim
    });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};
