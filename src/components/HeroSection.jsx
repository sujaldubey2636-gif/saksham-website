import React, { Suspense, lazy } from 'react';

// Lazy load the massive Three.js bundle so the main page HTML loads instantly without a black screen glitch
const HeroScene3D = lazy(() => import('./HeroScene3D'));

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center bg-[#121316] text-[#F0F1F3] px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-[#2A2D35] overflow-hidden">
      {/* 3D WebGL Particle Terrain */}
      <Suspense fallback={<div className="absolute inset-0 z-0 bg-[#121316]"></div>}>
        <div className="absolute inset-0 z-0 animate-fade-in">
          <HeroScene3D />
        </div>
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pointer-events-none">
        
        {/* Left Column: Direct Pitch (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pointer-events-none">
          
          {/* Headline: Straight talk */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F0F1F3] leading-[1.08] font-['Bricolage_Grotesque',sans-serif]">
            We build the systems that grow your business — quietly, in the background.
          </h1>

          {/* Body: No-BS scope & guarantee */}
          <p className="mt-6 text-base sm:text-lg text-[#8A919E] max-w-xl leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            No account managers, no 40-page slide decks, and no outsourcing to random subcontractors. You work directly with me, you review working code every 3 days, and everything is pushed to your own GitHub on day one.
          </p>

          {/* Primary Action + Direct Line */}
          <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
            <a
              href="#contact-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              onMouseEnter={() => window.triggerHyperdrive && window.triggerHyperdrive(true)}
              onMouseLeave={() => window.triggerHyperdrive && window.triggerHyperdrive(false)}
              className="inline-flex items-center justify-center px-5 py-3 rounded text-sm font-medium bg-[#E58E26]/20 backdrop-blur-md border border-[#E58E26]/50 text-[#E58E26] hover:bg-[#E58E26]/30 transition-colors font-mono tracking-tight shadow-[0_0_15px_rgba(229,142,38,0.15)]"
            >
              Discuss a project &rarr;
            </a>

            <a
              href="#work-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center px-5 py-3 rounded text-sm font-medium bg-[#1A1C21]/40 backdrop-blur-md text-[#F0F1F3] border border-[#2A2D35]/80 hover:bg-[#1A1C21]/60 hover:border-[#8A919E]/80 transition-colors font-mono"
            >
              Inspect recent builds
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-[#2A2D35]/50 w-full flex items-center font-mono">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-[#E58E26] animate-pulse drop-shadow-[0_0_12px_rgba(229,142,38,0.8)]">
                100%
              </div>
              <div className="text-sm text-[#8A919E] uppercase tracking-wider">code ownership</div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
