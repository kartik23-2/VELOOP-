import React, { useState, useEffect } from 'react';
import { Gift, Users, Trophy, Sparkles } from 'lucide-react';
import styles from './GiveawayStats.module.css';

export const GiveawayStats = () => {
  // Live Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 16,
    minutes: 50,
    seconds: 1
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="my-4">
      {/* 1. Styled Lavender Giant Countdown Banner matching Ref 6fc31524bf65f3377b2be853d03e1612 */}
      <div className={`${styles.lavenderBanner} section-lavender-block p-4 p-md-5 mb-4 position-relative overflow-hidden`}>
        {/* Stacked Background Typography */}
        <div className={styles.stackedTextBack}>GIVEAWAY</div>
        <div className={styles.stackedTextBackBottom}>GIVEAWAY</div>

        <div className="position-relative z-2 text-center">
          <h2 className={styles.bannerTitle}>GIVEAWAY</h2>

          {/* 4 Countdown Pills */}
          <div className="d-flex justify-content-center align-items-center gap-2 gap-md-4 my-4 flex-wrap">
            <div className={styles.timerPill}>
              <span className={styles.timerNum}>{String(timeLeft.days).padStart(2, '0')}</span>
              <span className={styles.timerUnit}>DAYS</span>
            </div>
            <div className={styles.timerPill}>
              <span className={styles.timerNum}>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className={styles.timerUnit}>HOURS</span>
            </div>
            <div className={styles.timerPill}>
              <span className={styles.timerNum}>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className={styles.timerUnit}>MINUTES</span>
            </div>
            <div className={styles.timerPill}>
              <span className={styles.timerNum}>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className={styles.timerUnit}>SECONDS</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Stats Row */}
      <div className="row g-3">
        <div className="col-6 col-md-4">
          <div className={`${styles.statCard} glass-panel`}>
            <div className={`${styles.iconWrap} ${styles.purpleIcon}`}>
              <Gift size={22} color="#c77dff" />
            </div>
            <div>
              <span className={styles.statLabel}>Total Giveaways</span>
              <div className={styles.statValue}>
                24 <span className={styles.statSub}>Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4">
          <div className={`${styles.statCard} glass-panel`}>
            <div className={`${styles.iconWrap} ${styles.blueIcon}`}>
              <Users size={22} color="#00f2fe" />
            </div>
            <div>
              <span className={styles.statLabel}>Total Participants</span>
              <div className={styles.statValue}>
                8.5K+ <span className={styles.statSub}>Users</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className={`${styles.statCard} glass-panel`}>
            <div className={`${styles.iconWrap} ${styles.greenIcon}`}>
              <Trophy size={22} color="#38b000" />
            </div>
            <div>
              <span className={styles.statLabel}>Prizes Won</span>
              <div className={styles.statValue}>
                1.2K+ <span className={styles.statSub}>Rewards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
