import React, { useState } from 'react';
import { MOCK_GIVEAWAY_DATA } from '../../data/giveawayData';
import { Trophy, History, ShieldCheck, Clock } from 'lucide-react';
import styles from './WinnersTabs.module.css';

export const WinnersTabs = ({ isEnded = false }) => {
  const [activeTab, setActiveTab] = useState('CURRENT');
  const pastWinners = MOCK_GIVEAWAY_DATA.previousWinners;

  return (
    <div className={`${styles.tabsContainer} glass-panel p-4 my-4`}>
      {/* Tab Switcher Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4 border-bottom border-secondary pb-3">
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
          <ShieldCheck size={14} className="me-1" color="#00f2fe" />
          Masked User IDs for Privacy
        </span>
      </div>

      {/* Tab 1: Current Giveaway Winners */}
      {activeTab === 'CURRENT' && (
        <div>
          {!isEnded ? (
            <div className={styles.liveNoticeBox}>
              <Clock size={32} color="#ffb703" className="mb-2 animate-pulse-glow" />
              <h4>Giveaway is still live</h4>
              <p>Winners will be announced automatically after the live countdown ends.</p>
              <div className={styles.statusBadge}>Current Giveaway Status: LIVE</div>
            </div>
          ) : (
            <div>
              <h4 className="mb-3 text-white font-weight-bold">Current Giveaway Final Winners</h4>
              <div className="row g-3">
                {pastWinners.slice(0, 3).map((w) => (
                  <div key={w.id} className="col-md-4">
                    <div className={styles.winnerCard}>
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

      {/* Tab 2: Previous Winners */}
      {activeTab === 'PREVIOUS' && (
        <div>
          <h4 className="mb-3 text-white font-weight-bold">Completed Giveaways Winners History</h4>
          <div className="table-responsive">
            <table className={`${styles.historyTable} table table-dark table-hover mb-0`}>
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
                    <td className="font-weight-bold text-info">{winner.maskedUser}</td>
                    <td className="text-white font-weight-bold">{winner.prize}</td>
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
