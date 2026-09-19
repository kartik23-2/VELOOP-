import mongoose from 'mongoose';

const GiveawayWinnerSchema = new mongoose.Schema({
  giveawayId: { type: String, required: true },
  prizeId: { type: String, required: true },
  prizeName: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  maskedUserId: { type: String, required: true },
  selectionMethod: { type: String, default: 'RANDOM_DRAW' },
  selectedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['SELECTED', 'CLAIMED', 'PROCESSING', 'DELIVERED'], default: 'SELECTED' }
});

export default mongoose.model('GiveawayWinner', GiveawayWinnerSchema);
