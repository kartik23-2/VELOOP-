import React from 'react';
import { MOCK_GIVEAWAY_DATA } from '../../data/giveawayData';
import { PrizeCard } from './PrizeCard';
import { Sparkles, Trophy } from 'lucide-react';
import styles from './FeaturedGiveaways.module.css';

export const FeaturedGiveaways = () => {
  const prizes = MOCK_GIVEAWAY_DATA.prizes;

  return (
    <div className={`${styles.prizesSectionWrapper} my-4 p-4 p-md-5`}>
      <div className="text-center mb-4">
        <h2 className={styles.sectionTitle}>
          Join To Win Amazing Prizes!
        </h2>
        <p className={styles.sectionSub}>
          Participate in our handpicked VELOOP giveaways and win exclusive rewards.
        </p>
      </div>

      <div className="row g-3">
        {prizes.map((prize) => (
          <div key={prize.id} className="col-12 col-sm-6 col-lg-4">
            <PrizeCard prize={prize} />
          </div>
        ))}
      </div>

      {/* Bottom Pill matching Ref 6fc31524bf65f3377b2be853d03e1612 */}
      <div className="text-center mt-4">
        <span className={styles.andManyMoreBadge}>
          <Sparkles size={16} color="#8a2be2" /> ✦ and many more...
        </span>
      </div>
    </div>
  );
};
