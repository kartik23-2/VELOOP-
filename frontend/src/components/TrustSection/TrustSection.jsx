import React from 'react';
import { ShieldCheck, Lock, Users, Headset } from 'lucide-react';
import styles from './TrustSection.module.css';

export const TrustSection = () => {
  const items = [
    {
      icon: <ShieldCheck size={24} color="#00f2fe" />,
      title: "100% Fair & Transparent",
      desc: "All giveaways are conducted fairly using verified random backend algorithms."
    },
    {
      icon: <Lock size={24} color="#c77dff" />,
      title: "Secure & Safe",
      desc: "Your data, entries, and wallet balances are our highest priority."
    },
    {
      icon: <Users size={24} color="#38b000" />,
      title: "Trusted by 10K+ Users",
      desc: "Join thousands of happy users who trust VELOOP Rewards daily."
    },
    {
      icon: <Headset size={24} color="#ffb703" />,
      title: "24/7 Customer Support",
      desc: "We're here to help you anytime, anywhere for any reward inquiry."
    }
  ];

  return (
    <section className={`${styles.trustBar} glass-panel p-4 my-4`}>
      <div className="row g-4">
        {items.map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex align-items-start gap-3">
              <div className={styles.iconBox}>{item.icon}</div>
              <div>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
