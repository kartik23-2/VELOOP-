import mongoose from 'mongoose';

const GiveawayParticipationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  giveawayId: { type: String, required: true },
  prizeId: { type: String, required: true },
  entryCurrency: { type: String, required: true },
  entryAmount: { type: Number, required: true },
  deviceHash: { type: String, required: true },
  ipAddress: { type: String, default: '127.0.0.1' },
  status: { type: String, enum: ['ACTIVE', 'FLAGGED', 'BLOCKED'], default: 'ACTIVE' },
  joinedAt: { type: Date, default: Date.now },
  transactionId: { type: String, required: true }
});

// MANDATORY index from requirement 8: Compound unique database index (userId + giveawayId)
GiveawayParticipationSchema.index({ userId: 1, giveawayId: 1 }, { unique: true });

export default mongoose.model('GiveawayParticipation', GiveawayParticipationSchema);
