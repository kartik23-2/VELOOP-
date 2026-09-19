import React, { useState } from 'react';
import { MOCK_GIVEAWAY_DATA } from '../../data/giveawayData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.css';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = MOCK_GIVEAWAY_DATA.faqs;

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`${styles.faqBox} glass-panel p-4 my-4`}>
      <h3 className={styles.faqTitle}>
        <HelpCircle size={22} color="#ffb703" className="me-2" />
        Frequently Asked Questions
      </h3>
      <p className={styles.faqSub}>Got questions? We've got answers.</p>

      <div className="d-flex flex-column gap-2 mt-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.faqItem}>
            <button className={styles.faqQuestionBtn} onClick={() => toggle(idx)}>
              <span>{faq.question}</span>
              {openIndex === idx ? <ChevronUp size={18} color="#c77dff" /> : <ChevronDown size={18} color="#a0a5c0" />}
            </button>
            {openIndex === idx && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
