import mongoose from 'mongoose';

const AuditLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: { type: String, required: true },
  giveawayId: { type: String },
  amount: { type: Number },
  currency: { type: String },
  result: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  ip: { type: String, default: '127.0.0.1' },
  userAgent: { type: String, default: 'Internal System' }
});

export default mongoose.model('AuditLog', AuditLogSchema);
