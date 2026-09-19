import React from 'react';

export const HeroGiftBoxSVG = ({ size = 280 }) => (
  <svg width={size} height={size} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="giftGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#9d4edd" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#090915" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7b2cbf" />
        <stop offset="100%" stopColor="#3c096c" />
      </linearGradient>
      <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe600" />
        <stop offset="50%" stopColor="#ffb703" />
        <stop offset="100%" stopColor="#fb8500" />
      </linearGradient>
    </defs>
    
    {/* Pedestal Aura Glow */}
    <ellipse cx="150" cy="240" rx="100" ry="25" fill="url(#giftGlow)" />
    <ellipse cx="150" cy="240" rx="70" ry="12" fill="#9d4edd" opacity="0.4" />

    {/* Box Body */}
    <rect x="75" y="130" width="150" height="100" rx="16" fill="url(#boxGrad)" stroke="#c77dff" strokeWidth="2" />
    <path d="M75 130 L150 170 L225 130 L150 90 Z" fill="#9d4edd" opacity="0.9" />

    {/* Vertical Gold Ribbon */}
    <rect x="135" y="130" width="30" height="100" fill="url(#goldRibbon)" />
    {/* Horizontal Ribbon */}
    <rect x="75" y="170" width="150" height="24" fill="url(#goldRibbon)" />

    {/* 3D Bow Knot */}
    <path d="M150 95 C120 50, 70 80, 140 100 Z" fill="url(#goldRibbon)" />
    <path d="M150 95 C180 50, 230 80, 160 100 Z" fill="url(#goldRibbon)" />
    <circle cx="150" cy="95" r="14" fill="#ffe600" stroke="#fb8500" strokeWidth="2" />

    {/* Sparkles */}
    <circle cx="50" cy="90" r="4" fill="#ffd166" />
    <circle cx="250" cy="80" r="5" fill="#00f2fe" />
    <circle cx="230" cy="210" r="3" fill="#ff477e" />
  </svg>
);

export const TicketHandSVG = ({ size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ticketGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe600" />
        <stop offset="100%" stopColor="#fb8500" />
      </linearGradient>
    </defs>
    {/* Ticket Card */}
    <g transform="rotate(-15 125 125)">
      <rect x="40" y="70" width="170" height="90" rx="12" fill="#121026" stroke="url(#ticketGold)" strokeWidth="3" />
      <path d="M40 115 A 10 10 0 0 0 40 135 L210 135 A 10 10 0 0 0 210 115 Z" fill="none" />
      <text x="75" y="115" fill="url(#ticketGold)" fontWeight="bold" fontSize="16" letterSpacing="3">GIVEAWAY</text>
      <text x="85" y="140" fill="#a0a5c0" fontSize="11">EXCLUSIVE TICKET</text>
      <polygon points="175,95 180,105 190,107 182,115 184,125 175,120 166,125 168,115 160,107 170,105" fill="url(#ticketGold)" />
    </g>
  </svg>
);

export const IPhoneIllustration = () => (
  <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="10" width="70" height="130" rx="16" fill="#1e183a" stroke="#9d4edd" strokeWidth="3" />
    <rect x="30" y="15" width="60" height="120" rx="12" fill="#0d0922" />
    <rect x="45" y="18" width="30" height="8" rx="4" fill="#000" />
    {/* Screen Glow */}
    <circle cx="60" cy="75" r="30" fill="#8a2be2" opacity="0.3" />
    <path d="M45 60 L75 90 M75 60 L45 90" stroke="#00f2fe" strokeWidth="2" opacity="0.6" />
  </svg>
);

export const AppleWatchIllustration = () => (
  <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Strap */}
    <rect x="45" y="10" width="30" height="130" rx="6" fill="#2d2a4a" />
    {/* Watch Body */}
    <rect x="30" y="40" width="60" height="70" rx="14" fill="#161233" stroke="#3a86ff" strokeWidth="3" />
    {/* Dial */}
    <circle cx="60" cy="75" r="22" fill="#09071b" />
    <line x1="60" y1="75" x2="60" y2="60" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" />
    <line x1="60" y1="75" x2="72" y2="75" stroke="#ffb703" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const AirPodsIllustration = () => (
  <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="45" width="60" height="55" rx="18" fill="#1b1738" stroke="#38b000" strokeWidth="3" />
    <ellipse cx="60" cy="45" rx="30" ry="10" fill="#2c2754" />
    <circle cx="60" cy="72" r="3" fill="#38b000" />
  </svg>
);

export const AmazonGiftCardIllustration = () => (
  <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="45" width="90" height="60" rx="8" fill="#241b0d" stroke="#ff9900" strokeWidth="2" />
    <text x="25" y="70" fill="#ffffff" fontWeight="bold" fontSize="12">amazon</text>
    <path d="M 25 80 Q 55 90 85 80" stroke="#ff9900" strokeWidth="3" fill="none" />
    <polygon points="82,78 88,80 84,84" fill="#ff9900" />
  </svg>
);
