import React, { useState } from 'react';
import { useAppState, USER_STATES } from '../../context/StateContext';
import { GiveawayHero } from '../../components/GiveawayHero/GiveawayHero';
import { GiveawayStats } from '../../components/GiveawayStats/GiveawayStats';
import { WinnerSlider } from '../../components/WinnerSlider/WinnerSlider';
import { FeaturedGiveaways } from '../../components/FeaturedGiveaways/FeaturedGiveaways';
import { HowToParticipate } from '../../components/HowToParticipate/HowToParticipate';
import { WinnersTabs } from '../../components/WinnersTabs/WinnersTabs';
import { TrustSection } from '../../components/TrustSection/TrustSection';
import { GiveawayRules } from '../../components/GiveawayRules/GiveawayRules';
import { FAQ } from '../../components/FAQ/FAQ';
import { PrizeClaimModal } from '../../components/PrizeClaimModal/PrizeClaimModal';
import { Trophy, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import styles from './GiveawayHomePage.module.css';

export const GiveawayHomePage = () => {
  const { activeState, user, winnerDetails, claimStatus, setClaimStatus } = useAppState();
  const [showClaimModal, setShowClaimModal] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container pb-5">
      {/* 1. Winner Personalized State Banner (State 4) */}
      {activeState === USER_STATES.WINNER && (
        <div className={`${styles.winnerBanner} glass-panel p-4 my-3`}>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className={styles.winnerTrophyIcon}>
                <Trophy size={32} color="#ffb703" />
              </div>
              <div>
                <span className={styles.winnerBadge}>🎉 OFFICIAL WINNER ANNOUNCEMENT</span>
                <h3 className="text-white font-weight-bold mb-1">
                  Congratulations! You won {winnerDetails?.prizeName || 'Apple Watch Series 9'}!
                </h3>
                <p className="text-muted small m-0">
                  Your entry was selected in the official VELOOP Rewards draw.
                </p>
              </div>
            </div>

            <div>
              {claimStatus === 'NOT_SUBMITTED' ? (
                <button className="btn-veloop-gold fs-6 py-2 px-4" onClick={() => setShowClaimModal(true)}>
                  Claim Your Prize <ArrowRight size={18} />
                </button>
              ) : (
                <div className={styles.claimedBadge}>
                  <CheckCircle size={16} color="#38b000" /> Claim Submitted (Processing)
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. Participant State Banner (State 3) */}
      {activeState === USER_STATES.PARTICIPANT && (
        <div className={`${styles.participantBanner} glass-panel p-3 my-3`}>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="d-flex align-items-center gap-2">
              <CheckCircle size={20} color="#38b000" />
              <span className="text-white font-weight-bold">You're Participating ✓</span>
              <span className={styles.entriesPill}>Your Entries: 24 Entries</span>
            </div>
            <button className="btn-veloop-outline btn-sm" onClick={() => scrollToSection('featured-section')}>
              Earn More Entries →
            </button>
          </div>
        </div>
      )}

      {/* 3. Non-Winner Banner (State 5) */}
      {activeState === USER_STATES.NON_WINNER && (
        <div className={`${styles.nonWinnerBanner} glass-panel p-3 my-3`}>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <div className="text-white font-weight-bold">Didn't win this time?</div>
              <div className="text-muted small">Keep participating for the next giveaway!</div>
            </div>
            <button className="btn-veloop-primary btn-sm" onClick={() => scrollToSection('featured-section')}>
              Explore Next Giveaway →
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <GiveawayHero onExploreClick={() => scrollToSection('featured-section')} />

      {/* Statistics Bar with Live Countdown */}
      <GiveawayStats />

      {/* Winner Announcement Ticker Slider */}
      <WinnerSlider />

      {/* 1. Featured Giveaways Prizes Block (Full Width) */}
      <div id="featured-section">
        <FeaturedGiveaways />
      </div>

      {/* 2. How to Participate Section (Full Width Standalone Section) */}
      <div id="participate-section">
        <HowToParticipate onRulesClick={() => scrollToSection('rules-section')} />
      </div>

      {/* 3. Lucky Winners & Previous Winners Tab Section */}
      <WinnersTabs isEnded={activeState === USER_STATES.ENDED || activeState === USER_STATES.WINNER || activeState === USER_STATES.NON_WINNER} />

      {/* Trust & Guarantee Section */}
      <TrustSection />

      {/* Rules & Guidelines */}
      <GiveawayRules />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Winner Prize Claim Modal */}
      {showClaimModal && (
        <PrizeClaimModal
          winnerInfo={winnerDetails}
          onClose={() => setShowClaimModal(false)}
          onSubmitSuccess={() => setClaimStatus('SUBMITTED')}
        />
      )}
    </div>
  );
};
