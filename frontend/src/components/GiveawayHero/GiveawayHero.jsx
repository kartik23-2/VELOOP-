import React from 'react';
import { giftBoxImg, ticketHandImg } from '../../assets/images';
import { ShieldCheck, Zap, Gift, ArrowRight } from 'lucide-react';
import styles from './GiveawayHero.module.css';

export const GiveawayHero = ({ onExploreClick }) => {
  return (
    <section className={`${styles.heroContainer} glass-panel p-4 p-md-5 my-4`}>
      <div className="row align-items-center">
        {/* Left Side: Real 3D Gift Box Visual */}
        <div className="col-lg-3 text-center mb-4 mb-lg-0">
          <div className="animate-float d-inline-block">
            <img src={giftBoxImg} alt="Exclusive Gift Box" className={styles.heroImgLeft} />
          </div>
        </div>

        {/* Center Content */}
        <div className="col-lg-6 text-center text-lg-start">
          <div className={styles.topBadge}>
            <span>✨ Unlock Amazing Rewards ✨</span>
          </div>

          <h1 className={styles.heroHeading}>
            Exclusive Giveaway <span className={styles.purpleGradientText}>Rewards</span>
          </h1>

          <p className={styles.heroSub}>
            Join exciting giveaways, complete simple tasks, earn entries, and win amazing rewards from VELOOP Rewards.
          </p>

          {/* 3 Value Pillars */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-4">
            <div className={styles.featurePill}>
              <ShieldCheck size={14} color="#00f2fe" />
              <span><strong>100% Safe</strong> Secure & Trusted</span>
            </div>
            <div className={styles.featurePill}>
              <Zap size={14} color="#ffb703" />
              <span><strong>Instant Rewards</strong> Get Rewards Fast</span>
            </div>
            <div className={styles.featurePill}>
              <Gift size={14} color="#38b000" />
              <span><strong>Exclusive VEs</strong> Special for You</span>
            </div>
          </div>

          <div>
            <button className="btn-veloop-primary fs-5 py-3 px-4" onClick={onExploreClick}>
              Enter Giveaway <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side: Real Ticket Illustration */}
        <div className="col-lg-3 text-center d-none d-lg-block">
          <div className="animate-float" style={{ animationDelay: '1.5s' }}>
            <img src={ticketHandImg} alt="Giveaway Ticket" className={styles.heroImgRight} />
          </div>
        </div>
      </div>
    </section>
  );
};
