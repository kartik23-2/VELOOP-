import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';

import giveawayRoutes from './src/routes/giveawayRoutes.js';
import participationRoutes from './src/routes/participationRoutes.js';
import claimRoutes from './src/routes/claimRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import { seedDatabase } from './src/config/seedData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Rate Limiting
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true
}));
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' }
});
app.use('/api/', apiLimiter);

// API Routes
app.use('/api/giveaways', giveawayRoutes);
app.use('/api/giveaways', participationRoutes);
app.use('/api/giveaways', claimRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date(), service: 'VELOOP Rewards Giveaway API' });
});

// Database Connection & Boot
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/veloop_giveaways';

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('⚡ Connected to MongoDB Database');
    await seedDatabase();
  })
  .catch((err) => {
    console.warn('⚠️ MongoDB connection warning:', err.message);
    console.log('ℹ️ Running backend API in fallback mode.');
  });

app.listen(PORT, () => {
  console.log(`🚀 VELOOP Giveaway Backend Server running on http://localhost:${PORT}`);
});
