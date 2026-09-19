import mongoose from 'mongoose';

const FraudEventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  giveawayId: { type: String },
  deviceHash: { type: String },
  ipAddress: { type: String },
  riskScore: { type: Number, required: true }, // 0 to 100
  reason: { type: String, required: true },
  signals: [{ type: String }],
  action: { type: String, enum: ['LOGGED', 'FLAGGED', 'BLOCKED'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('FraudEvent', FraudEventSchema);
