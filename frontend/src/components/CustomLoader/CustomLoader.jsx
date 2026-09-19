import React, { useState, useEffect } from 'react';
import { giftBoxImg } from '../../assets/images';
import styles from './CustomLoader.module.css';

export const CustomLoader = ({ fullScreen = false }) => {
  const messages = [
    "Preparing today's rewards...",
    "Checking active giveaways...",
    "Loading available prizes...",
    "Bringing your rewards closer..."
  ];
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIdx(prev => (prev + 1) % messages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.loaderContainer} ${fullScreen ? styles.fullScreenLoader : ''}`}>
      <div className={styles.loaderCard}>
        <div className={styles.giftAnim}>
          <img src={giftBoxImg} alt="Unlocking Rewards" style={{ width: '130px', height: 'auto' }} />
        </div>
        <div className={styles.rewardBadge}>REWARD</div>
        <div className={styles.loadingText}>{messages[msgIdx]}</div>
        <div className={styles.dotPulse}>
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
};
