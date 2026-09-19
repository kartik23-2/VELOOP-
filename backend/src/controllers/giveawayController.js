import { Giveaway } from '../models/Giveaway.js';
import GiveawayWinner from '../models/GiveawayWinner.js';

// GET /api/giveaways/current
export const getCurrentGiveaway = async (req, res) => {
  try {
    let giveaway = await Giveaway.findOne({ status: 'ACTIVE' });
    if (!giveaway) {
      giveaway = await Giveaway.findOne().sort({ createdAt: -1 });
    }
    if (!giveaway) {
      return res.status(404).json({ error: 'GIVEAWAY_NOT_FOUND', message: 'No active giveaways found.' });
    }

    return res.json({
      success: true,
      giveaway
    });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};

// GET /api/giveaways/:id
export const getGiveawayById = async (req, res) => {
  try {
    const { id } = req.params;
    const giveaway = await Giveaway.findOne({
      $or: [{ giveawayId: id }, { slug: id }]
    });

    if (!giveaway) {
      return res.status(404).json({ error: 'GIVEAWAY_NOT_FOUND', message: 'Giveaway not found.' });
    }

    return res.json({
      success: true,
      giveaway
    });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};

// GET /api/giveaways/previous
export const getPreviousGiveaways = async (req, res) => {
  try {
    const previous = await Giveaway.find({ status: { $ne: 'ACTIVE' } }).sort({ endAt: -1 });
    return res.json({
      success: true,
      giveaways: previous
    });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};

// GET /api/giveaways/:id/winners
export const getGiveawayWinners = async (req, res) => {
  try {
    const { id } = req.params;
    const winners = await GiveawayWinner.find({ giveawayId: id });
    return res.json({
      success: true,
      winners
    });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
};
