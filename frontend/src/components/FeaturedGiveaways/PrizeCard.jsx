import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Clock, ArrowRight, Coins } from 'lucide-react';
import {
  iphone15Img,
  applewatchImg,
  airpodsImg,
  amazon2000Img,
  amazon500Img,
  amazon20Img
} from '../../assets/images';
import styles from './FeaturedGiveaways.module.css';

export const PrizeCard = ({ prize }) => {
  const navigate = useNavigate();

  const getPrizeImage = (prizeObj) => {
    if (prizeObj.id === 'PRIZE-001' || prizeObj.image === 'iphone15') return iphone15Img;
    if (prizeObj.id === 'PRIZE-002' || prizeObj.image === 'applewatch') return applewatchImg;
    if (prizeObj.id === 'PRIZE-003' || prizeObj.image === 'airpods') return airpodsImg;
    if (prizeObj.id === 'PRIZE-004') return amazon2000Img;
    if (prizeObj.id === 'PRIZE-005') return amazon500Img;
    if (prizeObj.id === 'PRIZE-006') return amazon20Img;
    return amazon2000Img;
  };

  const handleCardClick = () => {
    // Mandated Requirement 79 & 103: Every Join Now button MUST open individual giveaway details page!
    navigate(`/giveaway/${prize.slug || prize.id}`);
  };

  return (
    <div className={`${styles.prizeCard} glass-panel h-100 d-flex flex-column justify-content-between p-3`}>
      <div>
        {/* Top Header: Badge & Fee */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className={styles.positionBadge} style={{ backgroundColor: prize.badgeColor || '#9d4edd' }}>
            {prize.position}
          </span>
          <span className={styles.feeBadge}>
            <Coins size={12} color="#00f2fe" />
            {prize.entryFee.amount} {prize.entryFee.currency}
          </span>
        </div>

        {/* Prize Visual */}
        <div className={`${styles.visualBox} mb-3`}>
          <img src={getPrizeImage(prize)} alt={prize.name} className={styles.prizeCardImg} />
        </div>

        {/* Title & Specs */}
        <h3 className={styles.prizeTitle}>{prize.name}</h3>
        <p className={styles.prizeSub}>{prize.shortDescription}</p>
      </div>

      <div>
        {/* Stats Row */}
        <div className={`${styles.cardMetaRow} d-flex justify-content-between py-2 my-2 border-top border-bottom`}>
          <div className="d-flex align-items-center gap-1">
            <Users size={14} color="#00f2fe" />
            <span>{prize.participants}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <Clock size={14} color="#ffb703" />
            <span>{prize.remainingTime}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`${styles.joinBtn} w-100 btn-veloop-primary justify-content-center mt-2`}
          onClick={handleCardClick}
        >
          Join Now <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
