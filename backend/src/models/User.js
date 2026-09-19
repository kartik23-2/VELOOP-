import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  maskedId: { type: String, required: true },
  role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
  balances: {
    VEs: { type: Number, default: 350 },
    SVEs: { type: Number, default: 1000 },
    Tokens: { type: Number, default: 5000 }
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);
