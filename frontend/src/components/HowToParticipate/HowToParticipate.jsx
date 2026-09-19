import React from 'react';
import { UserCheck, CheckCircle2, Coins, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import styles from './HowToParticipate.module.css';

export const HowToParticipate = ({ onRulesClick }) => {
  const steps = [
    {
      num: 'Step 1',
      title: 'Sign Up / Login',
      desc: 'Create your VELOOP Rewards account or login to get started.',
      icon: <UserCheck size={20} color="#6b21a8" />,
    },
    {
      num: 'Step 2',
      title: 'Complete Tasks',
      desc: 'Complete eligible activities and verify your required entry fee.',
      icon: <CheckCircle2 size={20} color="#1e40af" />,
    },
    {
      num: 'Step 3',
      title: 'Get Entries',
      desc: 'Confirm entry to earn verified entries for the giveaway event.',
      icon: <Coins size={20} color="#15803d" />,
    },
    {
      num: 'Step 4',
      title: 'Win Rewards',
      desc: 'Winners are selected randomly after the giveaway countdown ends.',
      icon: <Trophy size={20} color="#b45309" />,
    }
  ];

  return (
    <div className={`${styles.pinkSection} section-pink-block p-4 p-md-5 my-4 position-relative overflow-hidden`}>
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
        <div>
          <h2 className={styles.pinkHeader}>How To Participate</h2>
          <p className={styles.pinkSub}>Follow these simple steps to join and win.</p>
        </div>
        <div className={styles.tryLuckBadge}>
          <Sparkles size={14} color="#6b21a8" /> ✦ try your luck
        </div>
      </div>

      <div className="row g-3">
        {steps.map((step, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <div className={styles.pinkStepCard}>
              <div className={styles.stepNumBadge}>{step.num}</div>
              <div className={styles.stepIconWrap}>{step.icon}</div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn-veloop-dark py-2 px-4" onClick={onRulesClick}>
          View Rules & Guidelines <ArrowRight size={16} className="ms-1" />
        </button>
      </div>
    </div>
  );
};
