import mongoose from 'mongoose';

const PrizeSchema = new mongoose.Schema({
  prizeId: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true }, // e.g. "1st Prize", "2nd Prize", "3rd Prize", "Lucky Draw"
  prizeType: { type: String, enum: ['PHYSICAL', 'GIFT_CARD', 'DIGITAL'], required: true },
  image: { type: String, required: true },
  shortDescription: { type: String, required: true },
  winnerCount: { type: Number, required: true, default: 1 },
  entryFee: {
    amount: { type: Number, required: true },
    currency: { type: String, enum: ['VEs', 'SVEs', 'Tokens'], required: true }
  },
  payoutValue: { type: String, default: '' }
});

const GiveawaySchema = new mongoose.Schema({
  giveawayId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['UPCOMING', 'ACTIVE', 'ENDED', 'ARCHIVED'], default: 'ACTIVE' },
  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  totalParticipants: { type: Number, default: 0 },
  prizes: [PrizeSchema],
  rules: [{ type: String }],
  eligibility: { type: String, default: 'Open to all registered VELOOP Rewards accounts.' },
  createdAt: { type: Date, default: Date.now }
});

export const Prize = mongoose.model('Prize', PrizeSchema);
export const Giveaway = mongoose.model('Giveaway', GiveawaySchema);
