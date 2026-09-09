import React from 'react';

const Logo = ({ size = 'md', className = '' }) => {
  const sizes = { sm: 'h-6', md: 'h-8', lg: 'h-10' };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 60"
      fill="none"
      className={`${sizes[size]} w-auto ${className}`}
      aria-label="Team SAKSHAM Logo"
    >
      <defs>
        <linearGradient id="sakshamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Geometric S logo emblem */}
      <g transform="translate(10, 8)">
        <rect width="44" height="44" rx="12" fill="#111827" stroke="url(#sakshamGrad)" strokeWidth="1.5" />
        <path
          d="M 31 16 C 31 13 27 13 22 13 C 16 13 14 16 14 20 C 14 26 30 24 30 31 C 30 36 26 38 21 38 C 15 38 13 34 13 31"
          stroke="url(#sakshamGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="31" cy="16" r="2.5" fill="#38BDF8" />
        <circle cx="13" cy="31" r="2.5" fill="#A855F7" />
      </g>
      {/* Typography */}
      <text x="66" y="29" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#94A3B8">TEAM</text>
      <text x="65" y="46" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontSize="19" fontWeight="800" letterSpacing="1.5" fill="#F8FAFC">SAKSHAM</text>
    </svg>
  );
};

export default Logo;
