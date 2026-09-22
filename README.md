# VELOOP Rewards – Giveaway & Rewards Platform

> **Production-Ready Full-Stack Giveaway Platform** built for VELOOP Rewards featuring a high-performance React (Vite) frontend with fintech-inspired glassmorphic aesthetics, micro-interactions, custom loaders, and an Express/MongoDB backend with atomic balance deduction, compound unique database indexes, anti-fraud risk scoring, and audit logging.

---

## 1. Project Overview
VELOOP Rewards Giveaway Platform is designed to give users a transparent, trustworthy, rewarding, and engaging experience. Users can browse live giveaways for premium prizes (iPhone 15 Pro, Apple Watch Series 9, AirPods Pro 2, Amazon Gift Cards), check their virtual wallet balances (VEs, SVEs, Tokens), review entry fee requirements, and participate in exclusive giveaway draws.

---

## 2. Giveaway Concept
The platform operates on an entry-fee system where virtual currency balances earned through eligible activities are exchanged for giveaway entries. 
- **1st Prize (iPhone 15 Pro)**: 250 VEs (1 Winner)
- **2nd Prize (Apple Watch Series 9)**: 200 VEs (3 Winners)
- **3rd Prize (AirPods Pro 2)**: 500 SVEs (5 Winners)
- **Lucky Draw (₹2,000 Amazon Gift Card)**: 500 VEs (10 Winners)
- **Lucky Draw (₹500 Amazon Gift Card)**: 300 VEs (15 Winners)
- **Token Special (₹20 Amazon Gift Voucher)**: 2,000 Tokens (50 Winners)

---

## 3. Key Features
- 🌟 **Fintech Glassmorphic UI**: Sleek deep violet/navy backdrop (`#070611`), glowing neon cyan/purple accents, and smooth hover micro-animations.
- ⚡ **Real-Time Live Countdown & Stats Bar**: Live ticking countdown timer (`12d : 08h : 45m : 32s`) and counters for active giveaways (24), users (8.5K+), and prizes won (1.2K+).
- 📢 **Autoscrolling Winner Announcement Slider**: Marquee ticker bar displaying social proof announcements with masked user IDs (`User VE****83 won an Apple Watch Series 9!`).
- 🛒 **Dedicated Individual Giveaway Details Page (`/giveaway/:slug`)**: Features a dedicated prize visual, real-time balance checker widget comparing `Your Balance` vs `Entry Fee`, sufficient vs insufficient balance alerts, 7-step process timeline, T&Cs, and entry confirmation modal.
- 🎁 **Winner-Specific Claim System**: Automatic detection of winning state (`currentUserId === winner.userId`) rendering modal forms tailored to prize type (Physical shipping address vs. Amazon Gift Card email).
- 🚀 **Custom VELOOP Loader**: Custom animated gift box loader with rotating status messages (*"Preparing today's rewards..."*, *"Checking active giveaways..."*).
- 🛡️ **Interactive Demo State Switcher**: Built-in Navbar toolbar allowing reviewers to test all 7 user states (*Visitor*, *Logged-In*, *Participant*, *Winner*, *Non-Winner*, *Ended*, *Upcoming*) with a single click.

---

## 4. Giveaway States & Lifecycle
1. **Visitor State**: Unauthenticated view prompting login/signup.
2. **Logged-In User State**: Logged in with active balances, ready to participate.
3. **Participant State**: Joined giveaway, displays `You're Participating ✓` badge and 24 entries.
4. **Winner State**: Displays personalized congratulations hero banner and `Claim Your Prize` button.
5. **Non-Winner State**: Displays `Didn't win this time? Keep participating for next giveaway.` banner.
6. **Ended Giveaway State**: Giveaway countdown zeroed out, winners finalized.
7. **Upcoming Giveaway State**: Displays `Next Giveaway Starts In 3 Days` preview.

---

## 5. Winner System
Winner selection is strictly backend-controlled. When a giveaway ends:
- iPhone 15 Pro: Strictly 1 winner enforced.
- Apple Watch / AirPods / Amazon Cards: Configurable multiple winners.
- All public winner lists display anonymized masked IDs (`VE****42`) for privacy protection.

---

## 6. Prize Claim System
- **Physical Products (iPhone, Watch, AirPods)**: Collects Full Name, Phone Number, Complete Address, City, State, and PIN Code.
- **Digital Gift Cards (Amazon Vouchers)**: Collects Delivery Email Address.
- **Claim States**: `NOT_SUBMITTED` ➔ `SUBMITTED` (Processing) ➔ `COMPLETED` (Delivered) or `EXPIRED`.

---

## 7. Technology Stack
- **Frontend**: React 19, Vite 8, Bootstrap 5, CSS Modules, Lucide React, Framer Motion, Canvas Confetti.
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Express Rate Limit, BcryptJS.

---

## 8. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/veloop-giveaway.git
cd veloop-giveaway

# Install Frontend dependencies
cd frontend
npm install

# Install Backend dependencies
cd ../backend
npm install
```

---

## 9. Development
To run both frontend and backend locally:
```bash
# Start Backend API Server (Port 5000)
cd backend
npm run dev

# In a separate terminal, start Frontend Dev Server (Port 5173)
cd frontend
npm run dev
```

---

## 10. Production Build
```bash
cd frontend
npm run build
```

---

## 11. Folder Structure
```
veloop/
├── backend/                       # Node/Express API & Anti-Fraud Service
│   ├── src/
│   │   ├── config/                # DB Connection & seedData.js
│   │   ├── controllers/           # Giveaway, Participation, Winner, Claim Controllers
│   │   ├── middleware/            # Auth JWT, Anti-Fraud, Rate Limiter
│   │   ├── models/                # Mongoose Schemas (User, Giveaway, Participation, Transaction, Winner, Claim, FraudEvent, AuditLog)
│   │   └── routes/                # Express API Route Handlers
│   ├── server.js                  # Entry point
│   └── package.json
└── frontend/                      # React + Vite Frontend
    ├── src/
    │   ├── assets/                # SVG illustrations & graphics
    │   ├── components/            # Reusable UI components
    │   │   ├── Navbar/            # Navigation bar & State Switcher
    │   │   ├── GiveawayHero/      # Animated hero banner
    │   │   ├── GiveawayStats/     # Live countdown & stats bar
    │   │   ├── WinnerSlider/      # Autoscrolling ticker
    │   │   ├── FeaturedGiveaways/ # Prize cards grid
    │   │   ├── HowToParticipate/  # 4-step vertical timeline
    │   │   ├── WinnersTabs/       # Live vs Completed winners tabs
    │   │   ├── PrizeClaimModal/   # Dynamic claim form modal
    │   │   ├── ConfirmationModal/ # Entry fee breakdown modal
    │   │   ├── CustomLoader/      # VELOOP branded loading experience
    │   │   ├── TrustSection/      # Transparency & security guarantees
    │   │   ├── GiveawayRules/     # Rules & guidelines accordion
    │   │   └── FAQ/               # FAQ accordion
    │   ├── pages/
    │   │   ├── GiveawayHome/      # Main Giveaway Hub
    │   │   └── GiveawayDetails/   # Individual Giveaway Page
    │   ├── context/               # StateContext (7 User States & Wallet Balances)
    │   ├── data/                  # Mock API giveaway data
    │   └── styles/                # CSS tokens & glassmorphism
    └── package.json
```

---

## 12. Component Architecture
Components are modularized with `.jsx` logic and scoped `.module.css` modules. State is passed via React Context (`StateContext.jsx`) allowing seamless dynamic state updates across all components.

---

## 13. Responsive Design
The entire application is fluidly responsive across:
- **Mobile (320px+)**: Stacking hero, horizontal scroll prize cards, 2-column stats, touch-friendly claim forms.
- **Tablet (768px+)**: 2-column balanced grid.
- **Desktop (1024px - 1440px+)**: Premium 9-column / 3-column composition.

---

## 14. Animation Details
- Custom CSS `@keyframes floatSlow` for 3D gift box floating.
- `@keyframes marquee` for autoscrolling winner ticker (pauses on hover).
- `@keyframes pulseDot` for custom VELOOP loader particle ring.

---

## 15. Mock Data Structure
Located in `frontend/src/data/giveawayData.js` and `backend/src/config/seedData.js`, containing structured JSON models matching production API schemas.

---

## 16. Future Backend Integration
The frontend uses standard `fetch` API methods and context state ready to connect to `http://localhost:5000/api/giveaways/*` by setting `VITE_API_URL` environment variable.

---

## 17. Screenshots
- **Desktop Main Giveaway Hub**: Displays Hero, Live Stats, Featured Cards, Winners Tabs.
- **Individual Giveaway Page**: Displays Prize Info, Balance Verification, and Entry Fee Breakdown.
- **Winner Prize Claim Modal**: Physical Shipping Address & Gift Card Email forms.

---

## 18. Live Demo
- Dev Server URL: `http://localhost:5173`
