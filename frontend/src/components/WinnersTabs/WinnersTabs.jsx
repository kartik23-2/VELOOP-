import React, { useState } from 'react';
import { MOCK_GIVEAWAY_DATA } from '../../data/giveawayData';
import { Trophy, History, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import styles from './WinnersTabs.module.css';

export const WinnersTabs = ({ isEnded = false }) => {
  const [activeTab, setActiveTab] = useState('CURRENT');
  const pastWinners = MOCK_GIVEAWAY_DATA.previousWinners;

  return (
    <div className={`${styles.luckyWinnersBlock} section-blue-block p-4 p-md-5 my-4`}>
      {/* Header matching Ref 6fc31524bf65f3377b2be853d03e1612 */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
        <div>
          <h2 className={styles.luckyHeader}>Lucky Winners</h2>
          <p className={styles.luckySub}>Real participants winning real rewards on VELOOP.</p>
        </div>
        
        {/* Pill Badges matching image */}
        <div className="d-flex gap-2">
          <span className={styles.pillBadge1}>⚡ Total Giveaways: 2352</span>
          <span className={styles.pillBadge2}>🎁 Giveaways Per Day: 25</span>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4 border-bottom border-dark pb-3">
        <div className="d-flex gap-2">
          <button
            className={`${styles.tabBtn} ${activeTab === 'CURRENT' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('CURRENT')}
          >
            <Trophy size={16} /> Winners Tab
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'PREVIOUS' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('PREVIOUS')}
          >
            <History size={16} /> Previous Winners
          </button>
        </div>

        <span className={styles.tabNotice}>
          <ShieldCheck size={14} className="me-1" color="#4c1d95" />
          Masked User IDs for Privacy
        </span>
      </div>

      {/* Tab 1: Current Giveaway Winners */}
      {activeTab === 'CURRENT' && (
        <div>
          {!isEnded ? (
            <div className={styles.liveNoticeBox}>
              <Clock size={36} color="#701a75" className="mb-2 animate-pulse-glow" />
              <h4 className="fw-bold text-dark">Giveaway is still live</h4>
              <p className="text-secondary small">Winners will be announced automatically after the live countdown ends.</p>
              <div className={styles.statusBadge}>Current Giveaway Status: LIVE</div>
            </div>
          ) : (
            <div>
              <h4 className="mb-3 text-dark font-weight-bold">Current Giveaway Final Winners</h4>
              <div className="row g-3">
                {pastWinners.slice(0, 3).map((w) => (
                  <div key={w.id} className="col-md-4">
                    <div className={styles.winnerAvatarCard}>
                      <div className={styles.winnerAvatar}>{w.maskedUser.substring(0, 4)}</div>
                      <div>
                        <div className={styles.winnerUser}>{w.maskedUser}</div>
                        <div className={styles.winnerPrize}>Won {w.prize}</div>
                        <div className={styles.winnerMeta}>{w.date} • {w.status}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Previous Winners Table */}
      {activeTab === 'PREVIOUS' && (
        <div>
          <h4 className="mb-3 text-dark font-weight-bold">Completed Giveaways Winners History</h4>
          <div className="table-responsive">
            <table className={`${styles.historyTable} table table-hover mb-0`}>
              <thead>
                <tr>
                  <th>Masked User ID</th>
                  <th>Prize Won</th>
                  <th>Giveaway Event</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pastWinners.map((winner) => (
                  <tr key={winner.id}>
                    <td className="font-weight-bold text-purple">{winner.maskedUser}</td>
                    <td className="text-dark font-weight-bold">{winner.prize}</td>
                    <td className="text-muted">{winner.giveaway}</td>
                    <td>{winner.date}</td>
                    <td><span className={styles.categoryBadge}>{winner.category}</span></td>
                    <td className="text-success font-weight-bold">{winner.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
