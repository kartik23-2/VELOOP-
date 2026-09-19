import mongoose from 'mongoose';

const GiveawayEntryTransactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  giveawayId: { type: String, required: true },
  prizeId: { type: String, required: true },
  currency: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, default: 'ENTRY_FEE' },
  status: { type: String, enum: ['PENDING', 'SUCCESS', 'FAILED', 'REVERSED'], default: 'SUCCESS' },
  balanceBefore: { type: Number, required: true },
  balanceAfter: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('GiveawayEntryTransaction', GiveawayEntryTransactionSchema);
