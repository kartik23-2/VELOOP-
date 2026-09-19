import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/me', async (req, res) => {
  try {
    const user = await User.findOne();
    if (!user) return res.status(404).json({ error: 'USER_NOT_FOUND' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'veloop_secret_key');
    return res.json({ success: true, user, token });
  } catch (err) {
    return res.status(500).json({ error: 'SERVER_ERROR', message: err.message });
  }
});

export default router;
