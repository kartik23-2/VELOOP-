import React, { useState, useEffect } from 'react';
import { Gift, Users, Trophy, Clock } from 'lucide-react';
import styles from './GiveawayStats.module.css';

export const GiveawayStats = () => {
  // Live Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 32
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
      <div className="row g-3">
        {/* Metric 1: Total Giveaways */}
        <div className="col-6 col-md-3">
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
        <div className="col-6 col-md-3">
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
        <div className="col-6 col-md-3">
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

        {/* Metric 4: Countdown Timer */}
        <div className="col-6 col-md-3">
          <div className={`${styles.statCard} ${styles.countdownCard} glass-panel`}>
            <div className={`${styles.iconWrap} ${styles.orangeIcon}`}>
              <Clock size={22} color="#ffb703" />
            </div>
            <div>
              <span className={styles.statLabel}>Ends In</span>
              <div className={styles.countdownTimer}>
                {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
              </div>
              <span className={styles.remainingBadge}>Live Remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
