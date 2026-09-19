import React from 'react';
import { UserCheck, CheckCircle2, Coins, Trophy, ArrowRight } from 'lucide-react';
import styles from './HowToParticipate.module.css';

export const HowToParticipate = ({ onRulesClick }) => {
  const steps = [
    {
      num: '01',
      title: 'Sign Up / Login',
      desc: 'Create your VELOOP Rewards account or login to get started.',
      icon: <UserCheck size={20} color="#c77dff" />,
      colorClass: styles.purpleStep
    },
    {
      num: '02',
      title: 'Complete Tasks',
      desc: 'Complete eligible activities and verify your required entry fee.',
      icon: <CheckCircle2 size={20} color="#00f2fe" />,
      colorClass: styles.blueStep
    },
    {
      num: '03',
      title: 'Get Entries',
      desc: 'Confirm entry to earn verified entries for the giveaway event.',
      icon: <Coins size={20} color="#38b000" />,
      colorClass: styles.greenStep
    },
    {
      num: '04',
      title: 'Win Rewards',
      desc: 'Winners are selected randomly after the giveaway countdown ends.',
      icon: <Trophy size={20} color="#ffb703" />,
      colorClass: styles.orangeStep
    }
  ];

  return (
    <div className={`${styles.timelineBox} glass-panel p-4 h-100 d-flex flex-column justify-content-between`}>
      <div>
        <h3 className={styles.timelineHeader}>
          <span className="me-2">🚀</span> How to Participate?
        </h3>
        <p className={styles.timelineSub}>Follow these simple steps to join and win.</p>

        <div className={styles.stepsList}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepItem}>
              <div className={`${styles.iconWrap} ${step.colorClass}`}>
                {step.icon}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>
                  <span className={styles.stepNum}>{step.num}. </span>
                  {step.title}
                </div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className={`${styles.rulesBtn} btn-veloop-outline w-100 mt-3`} onClick={onRulesClick}>
        View Rules & Guidelines <ArrowRight size={16} />
      </button>
    </div>
  );
};
