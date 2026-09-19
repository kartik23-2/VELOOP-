import express from 'express';
import {
  getCurrentGiveaway,
  getGiveawayById,
  getPreviousGiveaways,
  getGiveawayWinners
} from '../controllers/giveawayController.js';

const router = express.Router();

router.get('/current', getCurrentGiveaway);
router.get('/previous', getPreviousGiveaways);
router.get('/previous/winners', getPreviousGiveaways);
router.get('/:id', getGiveawayById);
router.get('/:id/winners', getGiveawayWinners);

export default router;
