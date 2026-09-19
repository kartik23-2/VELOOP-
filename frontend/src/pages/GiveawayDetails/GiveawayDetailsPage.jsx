import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_GIVEAWAY_DATA } from '../../data/giveawayData';
import { useAppState, USER_STATES } from '../../context/StateContext';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';
import {
  iphone15Img,
  applewatchImg,
  airpodsImg,
  amazon2000Img,
  amazon500Img,
  amazon20Img
} from '../../assets/images';
import {
  ArrowLeft,
  Clock,
  Users,
  Trophy,
  Coins,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import styles from './GiveawayDetailsPage.module.css';

export const GiveawayDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user, activeState, switchState, deductUserBalance } = useAppState();

  // Find target prize or fallback to first prize
  const prize = MOCK_GIVEAWAY_DATA.prizes.find(p => p.slug === slug || p.id === slug) || MOCK_GIVEAWAY_DATA.prizes[0];

  const currency = prize.entryFee.currency;
  const fee = prize.entryFee.amount;
  const userBalanceAmount = user.balances[currency] || 0;
  const isSufficient = userBalanceAmount >= fee;

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasJustJoined, setHasJustJoined] = useState(false);

  const getPrizeImage = (prizeObj) => {
    if (prizeObj.id === 'PRIZE-001' || prizeObj.image === 'iphone15') return iphone15Img;
    if (prizeObj.id === 'PRIZE-002' || prizeObj.image === 'applewatch') return applewatchImg;
    if (prizeObj.id === 'PRIZE-003' || prizeObj.image === 'airpods') return airpodsImg;
    if (prizeObj.id === 'PRIZE-004') return amazon2000Img;
    if (prizeObj.id === 'PRIZE-005') return amazon500Img;
    if (prizeObj.id === 'PRIZE-006') return amazon20Img;
    return amazon2000Img;
  };

  const handleJoinClick = () => {
    if (activeState === USER_STATES.VISITOR) {
      alert("Login Required: Please login to your VELOOP Rewards account before participating.");
      switchState(USER_STATES.LOGGED_IN);
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmParticipation = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      deductUserBalance(currency, fee);
      setIsSubmitting(false);
      setShowConfirmModal(false);
      setHasJustJoined(true);
    }, 1200);
  };

  const worksSteps = [
    { num: "01", text: "Review the giveaway details & prize specs" },
    { num: "02", text: "Check your eligibility & available wallet balance" },
    { num: "03", text: "Pay the required entry amount from your balance" },
    { num: "04", text: "Your participation is recorded securely on backend" },
    { num: "05", text: "Wait until the live giveaway countdown ends" },
    { num: "06", text: "Random winner is selected by verified engine" },
    { num: "07", text: "Winner claims physical item or digital voucher" }
  ];

  return (
    <div className="container py-4">
      {/* Back Navigation Bar (Requirement 82) */}
      <div className="mb-4">
        <Link to="/" className={`${styles.backBtn} text-decoration-none d-inline-flex align-items-center gap-2`}>
          <ArrowLeft size={18} /> ← Giveaway Home
        </Link>
      </div>

      {/* Hero Header Section (Requirement 81 & 83) */}
      <div className={`${styles.heroCard} glass-panel p-4 p-md-5 mb-4`}>
        <div className="row align-items-center g-4">
          <div className="col-lg-5 text-center">
            <div className={`${styles.visualWrapper} animate-float`}>
              <img src={getPrizeImage(prize)} alt={prize.name} className={styles.heroDetailImg} />
            </div>
          </div>
          <div className="col-lg-7">
            <div className={styles.exclusiveBadge}>
              <Sparkles size={14} color="#ffb703" /> EXCLUSIVE GIVEAWAY
            </div>

            <h1 className={styles.prizeHeaderTitle}>Win an {prize.name}</h1>
            <p className={styles.prizeHeaderSub}>
              Join this exclusive giveaway for a chance to win a brand new {prize.name}.
            </p>

            <div className="d-flex align-items-center gap-3 flex-wrap my-3">
              <div className={styles.liveStatusPill}>
                <span className={styles.liveDot}></span> GIVEAWAY LIVE
              </div>
              <div className={styles.countdownBadge}>
                <Clock size={15} color="#ffb703" /> Ends in: {prize.remainingTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Dedicated Prize Info Card & Real-Time Balance Verification (Requirement 84, 85, 87, 88) */}
        <div className="col-lg-7">
          <div className={`${styles.infoCard} glass-panel p-4 mb-4`}>
            <h3 className="text-white font-weight-bold mb-3 border-bottom border-secondary pb-2">
              Prize Information & Entry Requirements
            </h3>

            <div className="row g-3 mb-4">
              <div className="col-4">
                <div className={styles.metaTile}>
                  <Trophy size={18} color="#ffb703" />
                  <span className={styles.tileLabel}>Winners</span>
                  <strong className="text-white">{prize.winnerCount} Winner{prize.winnerCount > 1 ? 's' : ''}</strong>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.metaTile}>
                  <Users size={18} color="#00f2fe" />
                  <span className={styles.tileLabel}>Participants</span>
                  <strong className="text-white">{prize.participants}</strong>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.metaTile}>
                  <Coins size={18} color="#38b000" />
                  <span className={styles.tileLabel}>Prize Value</span>
                  <strong className="text-white">{prize.payoutValue}</strong>
                </div>
              </div>
            </div>

            {/* Real-time Balance Check Box */}
            <div className={`${styles.balanceCheckCard} p-3 mb-4`}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small">Your Available Wallet Balance:</span>
                <strong className="text-info fs-5">{userBalanceAmount} {currency}</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small">Required Entry Fee:</span>
                <strong className="text-warning fs-5">{fee} {currency}</strong>
              </div>

              {isSufficient ? (
                <div className={styles.sufficientNotice}>
                  <CheckCircle size={16} color="#38b000" className="me-2" />
                  You have enough {currency} to join this giveaway!
                </div>
              ) : (
                <div className={styles.insufficientNotice}>
                  <AlertCircle size={16} color="#ff477e" className="me-2" />
                  Insufficient {currency}. You need {fee - userBalanceAmount} more {currency} to participate.
                </div>
              )}
            </div>

            {/* Action State Buttons */}
            {hasJustJoined || user.hasParticipated ? (
              <div className={styles.joinedSuccessCard}>
                <CheckCircle size={28} color="#38b000" />
                <div>
                  <h4 className="text-white font-weight-bold m-0">✓ You're Already Participating</h4>
                  <p className="text-muted small m-0">Your entry for {prize.name} has been securely recorded.</p>
                </div>
              </div>
            ) : isSufficient ? (
              <button className="btn-veloop-primary fs-5 w-100 py-3" onClick={handleJoinClick}>
                Join Giveaway – {fee} {currency}
              </button>
            ) : (
              <button className="btn-veloop-gold fs-5 w-100 py-3" onClick={() => navigate('/')}>
                Earn More {currency} →
              </button>
            )}
          </div>

          {/* About The Prize (Requirement 93) */}
          <div className={`${styles.infoCard} glass-panel p-4 mb-4`}>
            <h4 className="text-white font-weight-bold mb-2">About the Prize</h4>
            <p className="text-muted small leading-relaxed">
              The {prize.name} is an official brand-new reward offered as part of the VELOOP Rewards Summer Event.
              Guaranteed 100% authentic product delivered directly to the confirmed winner's doorstep or email address.
            </p>
          </div>
        </div>

        {/* Right Column: How it Works & Terms */}
        <div className="col-lg-5">
          {/* How This Giveaway Works (Requirement 90) */}
          <div className={`${styles.infoCard} glass-panel p-4 mb-4`}>
            <h4 className="text-white font-weight-bold mb-3 d-flex align-items-center gap-2">
              <Sparkles size={18} color="#00f2fe" /> How This Giveaway Works
            </h4>
            <div className="d-flex flex-column gap-3">
              {worksSteps.map((step, idx) => (
                <div key={idx} className="d-flex align-items-start gap-3">
                  <div className={styles.stepCircle}>{step.num}</div>
                  <div className="text-muted small pt-1">{step.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Conditions (Requirement 91 & 92) */}
          <div className={`${styles.infoCard} glass-panel p-4 mb-4`}>
            <h4 className="text-white font-weight-bold mb-3 d-flex align-items-center gap-2">
              <ShieldCheck size={18} color="#c77dff" /> Important Terms & Guidelines
            </h4>
            <ul className="text-muted small ps-3 mb-0 d-flex flex-column gap-2">
              <li>One entry per user account per giveaway event.</li>
              <li>Entry fee of {fee} {currency} is non-refundable once confirmed.</li>
              <li>Winners selected randomly by backend authority upon timer end.</li>
              <li>Winners must submit claim details within 7 days.</li>
              <li>Automated bot entries will be flagged and disqualified.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <ConfirmationModal
          prize={prize}
          userBalance={user.balances}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmParticipation}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};
