import React, { useState, useEffect } from 'react';
import { Gift, Users, Trophy, Clock, Sparkles } from 'lucide-react';
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
      {/* Metrics Row */}
      <div className="row g-3 mb-4">
        {/* Metric 1: Total Giveaways */}
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

        {/* Metric 2: Total Participants */}
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

        {/* Metric 3: Prizes Won */}
        <div className="col-6 col-md-4">
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

      {/* Giant Typography Banner with 4 Countdown Pills (Inspired by Reference Image 3) */}
      <div className="section-banner-countdown text-center">
        <div className={styles.bgTypoText}>GIVEAWAY</div>
        
        <div className={styles.countdownTitleRow}>
          <Sparkles size={20} className="me-1" />
          <span>OFFICIAL COUNTDOWN TIMER</span>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3 my-3 position-relative z-2">
          <div className={styles.pillBox}>
            <div className={styles.pillNum}>{String(timeLeft.days).padStart(2, '0')}</div>
            <div className={styles.pillLabel}>DAYS</div>
          </div>
          <div className={styles.pillBox}>
            <div className={styles.pillNum}>{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className={styles.pillLabel}>HOURS</div>
          </div>
          <div className={styles.pillBox}>
            <div className={styles.pillNum}>{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className={styles.pillLabel}>MINUTES</div>
          </div>
          <div className={styles.pillBox}>
            <div className={styles.pillNum}>{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className={styles.pillLabel}>SECONDS</div>
          </div>
        </div>

        <div className={styles.bgTypoTextSub}>GIVEAWAY</div>
      </div>
    </section>
  );
};
