import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

export const USER_STATES = {
  VISITOR: 'VISITOR',                         // State 1: Unauthenticated
  LOGGED_IN: 'LOGGED_IN',                     // State 2: Logged in, not joined
  PARTICIPANT: 'PARTICIPANT',                 // State 3: Logged in, joined (24 entries)
  WINNER: 'WINNER',                           // State 4: Winner state (Apple Watch Series 9)
  NON_WINNER: 'NON_WINNER',                   // State 5: Didn't win completed giveaway
  ENDED: 'ENDED',                             // State 6: Giveaway Ended
  UPCOMING: 'UPCOMING'                        // State 7: Next Giveaway in 3 Days
};

export const StateProvider = ({ children }) => {
  const [activeState, setActiveState] = useState(USER_STATES.LOGGED_IN);
  
  // User Profile & Virtual Wallet Balances
  const [user, setUser] = useState({
    userId: '660000000000000000000001',
    name: 'Kartik Demo User',
    maskedId: 'VE****82',
    email: 'kartik@veloop.com',
    balances: {
      VEs: 350,
      SVEs: 1200,
      Tokens: 5000
    },
    entriesCount: 0,
    hasParticipated: false
  });

  // Active Giveaway Meta
  const [giveawayMeta, setGiveawayMeta] = useState({
    id: 'GW-2026-08',
    title: 'VELOOP Summer Rewards Giveaway',
    status: 'ACTIVE',
    totalParticipants: 8520,
    endsInDays: 12,
    endsInHours: 8,
    endsInMinutes: 45,
    endsInSeconds: 32
  });

  // Winner & Claim State
  const [winnerDetails, setWinnerDetails] = useState(null);
  const [claimStatus, setClaimStatus] = useState('NOT_SUBMITTED'); // NOT_SUBMITTED, SUBMITTED, PROCESSING, COMPLETED

  // Update State when user toggles State Switcher Toolbar
  const switchState = (newState) => {
    setActiveState(newState);
    if (newState === USER_STATES.VISITOR) {
      setUser(prev => ({ ...prev, hasParticipated: false, entriesCount: 0 }));
      setGiveawayMeta(prev => ({ ...prev, status: 'ACTIVE' }));
      setWinnerDetails(null);
    } else if (newState === USER_STATES.LOGGED_IN) {
      setUser(prev => ({ ...prev, hasParticipated: false, entriesCount: 0 }));
      setGiveawayMeta(prev => ({ ...prev, status: 'ACTIVE' }));
      setWinnerDetails(null);
    } else if (newState === USER_STATES.PARTICIPANT) {
      setUser(prev => ({ ...prev, hasParticipated: true, entriesCount: 24 }));
      setGiveawayMeta(prev => ({ ...prev, status: 'ACTIVE' }));
      setWinnerDetails(null);
    } else if (newState === USER_STATES.WINNER) {
      setUser(prev => ({ ...prev, hasParticipated: true, entriesCount: 24 }));
      setGiveawayMeta(prev => ({ ...prev, status: 'ENDED' }));
      setWinnerDetails({
        prizeId: 'PRIZE-002',
        prizeName: 'Apple Watch Series 9',
        prizeType: 'PHYSICAL',
        wonDate: '06 Aug 2026',
        giveawayName: 'Summer Rewards'
      });
    } else if (newState === USER_STATES.NON_WINNER) {
      setUser(prev => ({ ...prev, hasParticipated: true, entriesCount: 10 }));
      setGiveawayMeta(prev => ({ ...prev, status: 'ENDED' }));
      setWinnerDetails(null);
    } else if (newState === USER_STATES.ENDED) {
      setGiveawayMeta(prev => ({ ...prev, status: 'ENDED' }));
    } else if (newState === USER_STATES.UPCOMING) {
      setGiveawayMeta(prev => ({ ...prev, status: 'UPCOMING' }));
    }
  };

  // Deduct Balance helper
  const deductUserBalance = (currency, amount) => {
    setUser(prev => ({
      ...prev,
      balances: {
        ...prev.balances,
        [currency]: Math.max(0, (prev.balances[currency] || 0) - amount)
      },
      hasParticipated: true,
      entriesCount: (prev.entriesCount || 0) + 24
    }));
    setActiveState(USER_STATES.PARTICIPANT);
  };

  return (
    <StateContext.Provider value={{
      activeState,
      switchState,
      user,
      setUser,
      giveawayMeta,
      winnerDetails,
      claimStatus,
      setClaimStatus,
      deductUserBalance
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);
