import mongoose from 'mongoose';

const PrizeClaimSchema = new mongoose.Schema({
  winnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'GiveawayWinner', required: true },
  giveawayId: { type: String, required: true },
  prizeId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  claimType: { type: String, enum: ['PHYSICAL', 'GIFT_CARD', 'DIGITAL'], required: true },
  physicalDetails: {
    fullName: { type: String },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pinCode: { type: String }
  },
  giftCardEmail: { type: String },
  status: { type: String, enum: ['NOT_SUBMITTED', 'SUBMITTED', 'PROCESSING', 'COMPLETED', 'EXPIRED'], default: 'SUBMITTED' },
  submittedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('PrizeClaim', PrizeClaimSchema);
