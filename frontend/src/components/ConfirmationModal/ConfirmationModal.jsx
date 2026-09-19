import React, { useState } from 'react';
import { Coins, CheckSquare, Square, X, AlertTriangle } from 'lucide-react';
import styles from './ConfirmationModal.module.css';

export const ConfirmationModal = ({ prize, userBalance, onConfirm, onClose, isSubmitting }) => {
  const [agreed, setAgreed] = useState(true);
  const currency = prize.entryFee.currency;
  const fee = prize.entryFee.amount;
  const currentBal = userBalance[currency] || 0;
  const remaining = currentBal - fee;
  const isSufficient = currentBal >= fee;

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalCard} glass-panel p-4`}>
        <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary pb-2">
          <h4 className="text-white font-weight-bold m-0 d-flex align-items-center gap-2">
            <Coins size={20} color="#ffb703" /> Confirm Participation
          </h4>
          <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
        </div>

        <div className={styles.prizeItemBox}>
          <div className="font-weight-bold text-white fs-5">{prize.name}</div>
          <div className="text-muted small">{prize.shortDescription}</div>
        </div>

        <div className={styles.balanceBreakdown}>
          <div className={styles.breakRow}>
            <span>Entry Fee:</span>
            <strong className="text-warning">{fee} {currency}</strong>
          </div>
          <div className={styles.breakRow}>
            <span>Your Available Balance:</span>
            <strong className="text-info">{currentBal} {currency}</strong>
          </div>
          <div className={`${styles.breakRow} border-top border-secondary pt-2 mt-2`}>
            <span>Balance After Joining:</span>
            <strong className={isSufficient ? 'text-success' : 'text-danger'}>
              {isSufficient ? `${remaining} ${currency}` : 'Insufficient Balance'}
            </strong>
          </div>
        </div>

        {!isSufficient && (
          <div className={styles.warningNotice}>
            <AlertTriangle size={16} className="me-2 flex-shrink-0" />
            You need {fee - currentBal} more {currency} to join this giveaway.
          </div>
        )}

        <div className={styles.termsBox} onClick={() => setAgreed(!agreed)}>
          {agreed ? <CheckSquare size={18} color="#00f2fe" /> : <Square size={18} color="#a0a5c0" />}
          <span>By continuing, you confirm that you have reviewed the giveaway rules & terms.</span>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn-veloop-outline" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </button>
          <button
            className="btn-veloop-primary"
            disabled={!isSufficient || !agreed || isSubmitting}
            onClick={() => onConfirm(prize)}
          >
            {isSubmitting ? '⟳ Joining Giveaway...' : `Confirm & Join – ${fee} ${currency}`}
          </button>
        </div>
      </div>
    </div>
  );
};
