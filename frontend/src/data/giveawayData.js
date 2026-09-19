export const MOCK_GIVEAWAY_DATA = {
  id: "GW-2026-08",
  title: "VELOOP Summer Rewards Mega Giveaway",
  slug: "summer-rewards-mega-giveaway",
  status: "ACTIVE",
  startDate: "2026-09-01T00:00:00Z",
  endDate: "2026-10-01T23:59:59Z",
  stats: {
    totalGiveaways: 24,
    totalParticipants: "8.5K+",
    prizesWon: "1.2K+",
    countdown: {
      days: 12,
      hours: 8,
      minutes: 45,
      seconds: 32
    }
  },
  prizes: [
    {
      id: "PRIZE-001",
      slug: "iphone-15-pro",
      name: "iPhone 15 Pro",
      position: "1st Prize",
      prizeType: "PHYSICAL",
      badgeColor: "#9d4edd",
      image: "iphone15",
      shortDescription: "Latest iPhone 15 Pro 128GB Titanium",
      winnerCount: 1,
      participants: "2.3K+",
      remainingTime: "12d : 08h : 45m left",
      entryFee: { amount: 250, currency: "VEs" },
      payoutValue: "₹1,34,900"
    },
    {
      id: "PRIZE-002",
      slug: "apple-watch-series-9",
      name: "Apple Watch Series 9",
      position: "2nd Prize",
      prizeType: "PHYSICAL",
      badgeColor: "#3a86ff",
      image: "applewatch",
      shortDescription: "Latest Apple Watch Series 9 GPS",
      winnerCount: 3,
      participants: "1.8K+",
      remainingTime: "9d : 06h : 30m left",
      entryFee: { amount: 200, currency: "VEs" },
      payoutValue: "₹41,900"
    },
    {
      id: "PRIZE-003",
      slug: "airpods-pro-2",
      name: "AirPods Pro 2",
      position: "3rd Prize",
      prizeType: "PHYSICAL",
      badgeColor: "#38b000",
      image: "airpods",
      shortDescription: "Active Noise Cancellation MagSafe",
      winnerCount: 5,
      participants: "3.1K+",
      remainingTime: "7d : 08h : 20m left",
      entryFee: { amount: 500, currency: "SVEs" },
      payoutValue: "₹24,900"
    },
    {
      id: "PRIZE-004",
      slug: "amazon-2000-gift-card",
      name: "Amazon Gift Card",
      position: "Lucky Draw",
      prizeType: "GIFT_CARD",
      badgeColor: "#fb8500",
      image: "amazongiftcard",
      shortDescription: "₹2,000 Amazon Gift Card Digital Voucher",
      winnerCount: 10,
      participants: "1.3K+",
      remainingTime: "5d : 02h : 15m left",
      entryFee: { amount: 500, currency: "VEs" },
      payoutValue: "₹2,000"
    },
    {
      id: "PRIZE-005",
      slug: "amazon-500-gift-card",
      name: "Amazon ₹500 Voucher",
      position: "Lucky Draw",
      prizeType: "GIFT_CARD",
      badgeColor: "#ff007f",
      image: "amazongiftcard",
      shortDescription: "₹500 Amazon Gift Card Voucher",
      winnerCount: 15,
      participants: "4.2K+",
      remainingTime: "3d : 12h : 00m left",
      entryFee: { amount: 300, currency: "VEs" },
      payoutValue: "₹500"
    },
    {
      id: "PRIZE-006",
      slug: "amazon-20-voucher",
      name: "Amazon ₹20 Voucher",
      position: "Token Special",
      prizeType: "GIFT_CARD",
      badgeColor: "#7000ff",
      image: "amazongiftcard",
      shortDescription: "₹20 Amazon Gift Voucher Claimable with Tokens",
      winnerCount: 50,
      participants: "6.7K+",
      remainingTime: "2d : 18h : 30m left",
      entryFee: { amount: 2000, currency: "Tokens" },
      payoutValue: "₹20"
    }
  ],
  winnerTickerMessages: [
    { id: 1, message: "User VE****83 won an Apple Watch Series 9!", time: "2 mins ago" },
    { id: 2, message: "User VE****21 won an iPhone 15 Pro!", time: "10 mins ago" },
    { id: 3, message: "User VE****54 won AirPods Pro 2!", time: "25 mins ago" },
    { id: 4, message: "User VE****92 won an Amazon Gift Card (₹2,000)!", time: "1 hour ago" },
    { id: 5, message: "User VE****11 won an Amazon Gift Card (₹500)!", time: "2 hours ago" }
  ],
  previousWinners: [
    { id: 101, maskedUser: "VE****42", prize: "iPhone 15 Pro", giveaway: "August Reward Rush", date: "15 Aug 2026", category: "Smartphone", status: "Delivered ✓" },
    { id: 102, maskedUser: "VE****91", prize: "Apple Watch Series 9", giveaway: "August Reward Rush", date: "15 Aug 2026", category: "Wearable", status: "Delivered ✓" },
    { id: 103, maskedUser: "VE****27", prize: "AirPods Pro 2", giveaway: "August Reward Rush", date: "15 Aug 2026", category: "Audio", status: "Delivered ✓" },
    { id: 104, maskedUser: "VE****66", prize: "₹2,000 Amazon Voucher", giveaway: "Independence Special", date: "10 Aug 2026", category: "Gift Card", status: "Claimed ✓" },
    { id: 105, maskedUser: "VE****88", prize: "₹500 Amazon Voucher", giveaway: "Independence Special", date: "10 Aug 2026", category: "Gift Card", status: "Claimed ✓" }
  ],
  faqs: [
    {
      question: "How do I participate in VELOOP Giveaways?",
      answer: "Create an account or login, complete simple tasks to earn VEs/SVEs/Tokens, navigate to your desired prize giveaway page, and confirm your entry fee to join."
    },
    {
      question: "How are winners selected?",
      answer: "Winners are randomly selected by our verified backend draw algorithm immediately after the giveaway countdown reaches zero."
    },
    {
      question: "When are winners announced?",
      answer: "Winner announcements are published automatically on the main Giveaway page under the Winners section right after the timer finishes."
    },
    {
      question: "What happens if I win?",
      answer: "If you win, a special 'Congratulations!' banner will appear on your screen with a 'Claim Your Prize' button where you can submit physical shipping details or your email address for digital vouchers."
    },
    {
      question: "Can I participate in multiple giveaways?",
      answer: "Yes! You can participate in any active giveaway as long as you have sufficient currency balance in your VELOOP wallet."
    }
  ]
};
