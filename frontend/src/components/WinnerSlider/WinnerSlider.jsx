import React from 'react';
import { MOCK_GIVEAWAY_DATA } from '../../data/giveawayData';
import { Sparkles, Trophy } from 'lucide-react';
import styles from './WinnerSlider.module.css';

export const WinnerSlider = () => {
  const messages = MOCK_GIVEAWAY_DATA.winnerTickerMessages;

  return (
    <div className={`${styles.sliderContainer} my-3`}>
      <div className={styles.sliderHeader}>
        <Trophy size={16} color="#ffb703" />
        <span>LIVE RECENT WINNERS</span>
      </div>
      
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {messages.concat(messages).map((item, idx) => (
            <div key={idx} className={styles.tickerItem}>
              <Sparkles size={14} color="#00f2fe" />
              <span className={styles.tickerText}>{item.message}</span>
              <span className={styles.tickerTime}>• {item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
