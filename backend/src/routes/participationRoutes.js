import express from 'express';
import { getMyParticipationStatus, joinGiveaway } from '../controllers/participationController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { fraudMiddleware } from '../middleware/fraudMiddleware.js';

const router = express.Router();

router.get('/:id/my-status', authMiddleware, getMyParticipationStatus);
router.post('/:id/join', authMiddleware, fraudMiddleware, joinGiveaway);

export default router;
