import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import styles from './GiveawayRules.module.css';

export const GiveawayRules = () => {
  const rules = [
    {
      title: 'Eligibility & Account Standing',
      text: 'Must hold a registered, active, and un-flagged VELOOP Rewards account in good standing.'
    },
    {
      title: 'One Entry Per Event Rule',
      text: 'A user may participate only once per giveaway event. Duplicate registration attempts from the same account will be rejected by database-level compound indexes.'
    },
    {
      title: 'Virtual Currency Deduction',
      text: 'Entry fees (VEs, SVEs, or Tokens) are verified and deducted directly from your server-side wallet balance upon entry confirmation.'
    },
    {
      title: 'Winner Selection & Announcement',
      text: 'Winners are randomly selected by our verified backend engine immediately following the countdown expiry.'
    },
    {
      title: 'Prize Claim Deadline',
      text: 'Verified winners have 7 calendar days to submit physical shipping details or delivery email address via the Prize Claim Modal.'
    }
  ];

  return (
    <div id="rules-section" className={`${styles.rulesBox} glass-panel p-4 my-4`}>
      <h3 className={styles.rulesTitle}>
        <ShieldCheck size={22} color="#00f2fe" className="me-2" />
        Giveaway Rules & Guidelines
      </h3>
      <p className={styles.rulesSub}>Please read our official participation rules carefully.</p>

      <div className="row g-3 mt-2">
        {rules.map((rule, idx) => (
          <div key={idx} className="col-md-6">
            <div className={styles.ruleCard}>
              <CheckCircle size={18} color="#38b000" className="flex-shrink-0 mt-1" />
              <div>
                <h5 className={styles.ruleHeader}>{rule.title}</h5>
                <p className={styles.ruleText}>{rule.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
