import User from '../models/User.js';
import { Giveaway } from '../models/Giveaway.js';
import GiveawayWinner from '../models/GiveawayWinner.js';

export const seedDatabase = async () => {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.create([
        {
          _id: '660000000000000000000001',
          name: 'Kartik Demo User',
          email: 'kartik@veloop.com',
          password: 'hashedpassword123',
          maskedId: 'VE****82',
          role: 'USER',
          balances: { VEs: 350, SVEs: 1200, Tokens: 5000 }
        },
        {
          _id: '660000000000000000000002',
          name: 'Winner User Alpha',
          email: 'winner1@veloop.com',
          password: 'hashedpassword123',
          maskedId: 'VE****42',
          role: 'USER',
          balances: { VEs: 500, SVEs: 1500, Tokens: 10000 }
        }
      ]);
      console.log('✅ Demo Users Seeded');
    }

    const giveawayCount = await Giveaway.countDocuments();
    if (giveawayCount === 0) {
      await Giveaway.create({
        giveawayId: 'GW-2026-08',
        title: 'VELOOP Summer Rewards Mega Giveaway',
        slug: 'summer-rewards-mega-giveaway',
        subtitle: 'Complete eligible activities, collect entries, and get a chance to win exclusive rewards.',
        description: 'Welcome to the official VELOOP Rewards Summer Mega Giveaway! Participate by confirming your entry fee from your available wallet balances. Winners will be automatically selected when the live countdown ends.',
        status: 'ACTIVE',
        startAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        endAt: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
        totalParticipants: 8520,
        prizes: [
          {
            prizeId: 'PRIZE-001',
            name: 'iPhone 15 Pro (128GB)',
            position: '1st Prize',
            prizeType: 'PHYSICAL',
            image: '/assets/iphone15.png',
            shortDescription: 'Latest Flagship Smartphone with A17 Pro Chip',
            winnerCount: 1,
            entryFee: { amount: 250, currency: 'VEs' },
            payoutValue: '₹1,34,900'
          },
          {
            prizeId: 'PRIZE-002',
            name: 'Apple Watch Series 9',
            position: '2nd Prize',
            prizeType: 'PHYSICAL',
            image: '/assets/applewatch.png',
            shortDescription: 'Advanced Health & Fitness Smartwatch',
            winnerCount: 3,
            entryFee: { amount: 200, currency: 'VEs' },
            payoutValue: '₹41,900'
          },
          {
            prizeId: 'PRIZE-003',
            name: 'AirPods Pro 2',
            position: '3rd Prize',
            prizeType: 'PHYSICAL',
            image: '/assets/airpods.png',
            shortDescription: 'Active Noise Cancellation & Spatial Audio',
            winnerCount: 5,
            entryFee: { amount: 500, currency: 'SVEs' },
            payoutValue: '₹24,900'
          },
          {
            prizeId: 'PRIZE-004',
            name: '₹2,000 Amazon Gift Card',
            position: 'Lucky Draw',
            prizeType: 'GIFT_CARD',
            image: '/assets/amazon_giftcard.png',
            shortDescription: 'Instant Digital Shopping Voucher for Amazon',
            winnerCount: 10,
            entryFee: { amount: 500, currency: 'VEs' },
            payoutValue: '₹2,000'
          },
          {
            prizeId: 'PRIZE-005',
            name: '₹500 Amazon Gift Card',
            position: 'Lucky Draw',
            prizeType: 'GIFT_CARD',
            image: '/assets/amazon_giftcard.png',
            shortDescription: 'Instant Digital Shopping Voucher for Amazon',
            winnerCount: 15,
            entryFee: { amount: 300, currency: 'VEs' },
            payoutValue: '₹500'
          },
          {
            prizeId: 'PRIZE-006',
            name: '₹20 Amazon Gift Voucher',
            position: 'Token Reward',
            prizeType: 'GIFT_CARD',
            image: '/assets/amazon_giftcard.png',
            shortDescription: 'Micro Voucher Claimable with Veloop Tokens',
            winnerCount: 50,
            entryFee: { amount: 2000, currency: 'Tokens' },
            payoutValue: '₹20'
          }
        ],
        rules: [
          'Must have an active and verified VELOOP Rewards account.',
          'Strictly 1 entry per user per giveaway event.',
          'Entry fees are deducted directly from your verified wallet balance upon confirmation.',
          'Prizes will be dispatched to winners within 7 business days following address/email verification.',
          'Automated bot scripts, multiple account usage, or fraudulent attempts will result in immediate disqualification.'
        ]
      });
      console.log('✅ Active Giveaway Seeded');
    }

    const winnerCount = await GiveawayWinner.countDocuments();
    if (winnerCount === 0) {
      await GiveawayWinner.create([
        {
          giveawayId: 'GW-2026-07',
          prizeId: 'PRIZE-PAST-01',
          prizeName: 'iPhone 15 Pro',
          userId: '660000000000000000000002',
          maskedUserId: 'VE****82',
          selectionMethod: 'RANDOM_DRAW',
          selectedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          status: 'DELIVERED'
        },
        {
          giveawayId: 'GW-2026-07',
          prizeId: 'PRIZE-PAST-02',
          prizeName: 'Apple Watch Series 9',
          userId: '660000000000000000000001',
          maskedUserId: 'VE****42',
          selectionMethod: 'RANDOM_DRAW',
          selectedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          status: 'SELECTED'
        },
        {
          giveawayId: 'GW-2026-07',
          prizeId: 'PRIZE-PAST-03',
          prizeName: 'AirPods Pro 2',
          userId: '660000000000000000000001',
          maskedUserId: 'VE****27',
          selectionMethod: 'RANDOM_DRAW',
          selectedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          status: 'DELIVERED'
        }
      ]);
      console.log('✅ Past Winners Seeded');
    }
  } catch (err) {
    console.error('Seed database error:', err);
  }
};
