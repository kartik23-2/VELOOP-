import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState, USER_STATES } from '../../context/StateContext';
import { Trophy, Gift, Coins, User, ShieldCheck } from 'lucide-react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { activeState, switchState, user } = useAppState();

  return (
    <header className={styles.navbarWrapper}>
      {/* State Switcher Bar for Demo Reviewers */}
      <div className={styles.demoStateBar}>
        <div className="container d-flex flex-wrap align-items-center justify-content-between py-1">
          <span className={styles.demoBadge}>
            <ShieldCheck size={14} className="me-1" /> DEMO STATE SWITCHER TOOLBAR:
          </span>
          <div className="d-flex gap-1 flex-wrap">
            {Object.keys(USER_STATES).map((stateKey) => (
              <button
                key={stateKey}
                onClick={() => switchState(stateKey)}
                className={`${styles.stateBtn} ${activeState === stateKey ? styles.activeStateBtn : ''}`}
              >
                {stateKey}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <nav className={`${styles.mainNav} container d-flex align-items-center justify-content-between py-3`}>
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <div className={styles.logoIcon}>VR</div>
          <div>
            <span className={styles.logoTitle}>VELOOP</span>
            <span className={styles.logoSub}>REWARDS</span>
          </div>
        </Link>

        {/* Center Pill Badge */}
        <div className={styles.centerBadge}>
          <Gift size={15} color="#ffb703" />
          <span>EXCLUSIVE GIVEAWAYS</span>
        </div>

        {/* Right Section: Virtual Wallet Balances & Profile */}
        <div className="d-flex align-items-center gap-3">
          {activeState !== USER_STATES.VISITOR ? (
            <>
              <div className={styles.walletGroup}>
                <div className={styles.balancePill} title="Veloop Entries">
                  <Coins size={14} color="#00f2fe" />
                  <span>{user.balances.VEs} VEs</span>
                </div>
                <div className={styles.balancePill} title="Special Veloop Entries">
                  <Trophy size={14} color="#38b000" />
                  <span>{user.balances.SVEs} SVEs</span>
                </div>
                <div className={styles.balancePill} title="Veloop Tokens">
                  <Coins size={14} color="#ffb703" />
                  <span>{user.balances.Tokens} Tokens</span>
                </div>
              </div>

              <div className={styles.userBadge}>
                <User size={16} color="#c77dff" />
                <span>{user.maskedId}</span>
              </div>
            </>
          ) : (
            <button className="btn-veloop-primary" onClick={() => switchState(USER_STATES.LOGGED_IN)}>
              Login / Sign Up
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
