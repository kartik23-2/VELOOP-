import express from 'express';
import { getMyClaimStatus, submitPrizeClaim } from '../controllers/claimController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id/my-claim', authMiddleware, getMyClaimStatus);
router.post('/:id/claim', authMiddleware, submitPrizeClaim);

export default router;
