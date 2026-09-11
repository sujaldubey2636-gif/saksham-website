import React from 'react';
import logoHorizontal from '../assets/saksham-logo-horizontal.png';
import logoEmblem from '../assets/saksham-emblem.png';
import logoFull from '../assets/saksham-logo-dark.png';

export default function Logo({ size = 'md', variant = 'horizontal', className = '' }) {
  const heights = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-11',
    xl: 'h-14',
  };

  const sources = {
    horizontal: logoHorizontal,
    emblem: logoEmblem,
    full: logoFull,
  };

  const src = sources[variant] || logoHorizontal;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={src}
        alt="SAKSHAM — Empowering Excellence"
        className={`${heights[size] || size} w-auto object-contain pointer-events-none`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
