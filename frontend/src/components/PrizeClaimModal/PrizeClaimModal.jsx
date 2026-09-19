import React, { useState } from 'react';
import { Trophy, CheckCircle, X, Mail, MapPin } from 'lucide-react';
import styles from './PrizeClaimModal.module.css';

export const PrizeClaimModal = ({ winnerInfo, onClose, onSubmitSuccess }) => {
  const isPhysical = winnerInfo?.prizeType === 'PHYSICAL';
  const [formData, setFormData] = useState({
    fullName: 'Kartik Winner',
    phone: '+91 98765 43210',
    address: '123 VELOOP Towers, High Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pinCode: '400001',
    email: 'winner@veloop.com'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      if (onSubmitSuccess) onSubmitSuccess(formData);
    }, 1200);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modalCard} glass-panel p-4`}>
        <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary pb-2">
          <h4 className="text-white font-weight-bold m-0 d-flex align-items-center gap-2">
            <Trophy size={22} color="#ffb703" /> Claim Your Prize
          </h4>
          <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
        </div>

        {!isDone ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.congratBox}>
              <div className="text-warning font-weight-bold">🎉 Congratulations!</div>
              <div className="text-white font-weight-bold fs-5">You won {winnerInfo?.prizeName || 'Apple Watch Series 9'}!</div>
              <div className="text-muted small">Claim deadline: 7 days remaining</div>
            </div>

            {isPhysical ? (
              <div className="row g-2 mt-2">
                <div className="col-12 text-info font-weight-bold small d-flex align-items-center gap-1 mb-1">
                  <MapPin size={14} /> Physical Prize Delivery Address:
                </div>
                <div className="col-12">
                  <label className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className={styles.label}>Complete Address</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>
                <div className="col-4">
                  <label className={styles.label}>City</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
                <div className="col-4">
                  <label className={styles.label}>State</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                  />
                </div>
                <div className="col-4">
                  <label className={styles.label}>PIN Code</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    value={formData.pinCode}
                    onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="mt-3">
                <div className="text-info font-weight-bold small d-flex align-items-center gap-1 mb-2">
                  <Mail size={14} /> Amazon Gift Card Email Delivery:
                </div>
                <label className={styles.label}>Delivery Email Address</label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-secondary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email where you want to receive your gift card"
                  required
                />
              </div>
            )}

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button type="button" className="btn-veloop-outline" onClick={onClose} disabled={isSubmitting}>
                Cancel
              </button>
              <button type="submit" className="btn-veloop-gold" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting Details...' : 'Submit Claim'}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-4">
            <CheckCircle size={56} color="#38b000" className="mb-3 animate-pulse-glow" />
            <h4 className="text-white font-weight-bold">Claim Submitted ✓</h4>
            <p className="text-muted small">
              Our team has received your prize claim details and will process your fulfillment shortly.
            </p>
            <button className="btn-veloop-primary mt-3" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
