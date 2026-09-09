import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop pt-space-2xl pb-space-3xl overflow-hidden flex flex-col items-center text-center"
    >
      {/* Ambient back-glow blobs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-tertiary/10 blur-3xl pointer-events-none animate-[glowPulse_3s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-4 w-48 h-48 bg-secondary-container/25 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative grid underlay */}
      <div className="absolute inset-0 grid-underlay opacity-30 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)' }} />

      <div className="relative z-10 flex flex-col items-center max-w-screen-md mx-auto w-full">
        {/* Capable Badge Chip */}
        <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-md mb-space-md border border-outline-variant/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
          </span>
          <span className="font-label text-label-sm font-semibold tracking-wider text-primary uppercase">
            SAKSHAM = CAPABLE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold tracking-tight mb-space-md max-w-xl
          text-display-hero-mobile leading-[1.15] -tracking-[0.02em]
          lg:text-display-hero lg:leading-[1.1] lg:-tracking-[0.03em]"
        >
          <span className="text-gradient-brand">Capable Solutions</span>
          <br />
          <span className="text-on-surface">for Growing Businesses</span>
        </h1>

        {/* Subtext */}
        <p className="font-body text-body-md md:text-body-lg text-on-surface-variant max-w-md md:max-w-lg mb-space-xl leading-relaxed">
          We engineer high-converting websites, automated workflows, and targeted digital marketing
          built to deliver measurable business revenue for small and growing teams.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-space-sm w-full max-w-sm sm:max-w-md mb-space-xl">
          <a
            href="#contact-section"
            className="btn-primary w-full sm:flex-1 min-h-[48px] text-sm"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span>Book a Free 15-Min Call</span>
          </a>
          <a
            href="#work-section"
            className="btn-secondary w-full sm:flex-1 min-h-[48px] text-sm"
          >
            <span>See Our Work</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </a>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-space-xs">
          {[
            { icon: 'verified',      label: 'Direct founder access', color: 'text-primary' },
            { icon: 'bolt',          label: 'No agency bloat',       color: 'text-tertiary' },
            { icon: 'check_circle',  label: 'Pragmatic execution',   color: 'text-secondary' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md ring-1 ring-outline-variant/30 text-on-surface-variant font-label text-label-sm shadow-sm"
            >
              <span className={`material-symbols-outlined text-[15px] ${badge.color}`}>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
