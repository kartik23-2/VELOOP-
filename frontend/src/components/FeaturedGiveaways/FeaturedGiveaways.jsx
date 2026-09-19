import React from 'react';
import { MOCK_GIVEAWAY_DATA } from '../../data/giveawayData';
import { PrizeCard } from './PrizeCard';
import { Star, Sparkles } from 'lucide-react';
import styles from './FeaturedGiveaways.module.css';

export const FeaturedGiveaways = () => {
  const prizes = MOCK_GIVEAWAY_DATA.prizes;

  return (
    <div className="my-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h2 className={styles.sectionHeader}>
            <Star size={24} color="#ffb703" fill="#ffb703" className="me-2" />
            Featured Giveaways
          </h2>
          <p className={styles.sectionSub}>
            Participate in our handpicked giveaways and win exciting rewards.
          </p>
        </div>
        <div className={styles.viewAllBadge}>
          <Sparkles size={14} color="#00f2fe" />
          <span>Active Events</span>
        </div>
      </div>

      <div className="row g-3">
        {prizes.map((prize) => (
          <div key={prize.id} className="col-12 col-sm-6 col-lg-4 col-xl-2">
            <PrizeCard prize={prize} />
          </div>
        ))}
      </div>
    </div>
  );
};
