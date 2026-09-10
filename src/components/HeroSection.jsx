import React from 'react';

export default function HeroSection() {
  return (
    <section className="px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop pt-24 lg:pt-32 pb-20 lg:pb-28 flex flex-col items-center text-center animate-fade-in-up">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface leading-tight">
          We build digital systems<br />
          <span className="text-gradient-brand">that drive revenue.</span>
        </h1>
        
        <p className="mt-6 text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          High-performance websites, automated workflows, and growth engineering — delivered in weeks, not months.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/project" className="btn-primary w-full sm:w-auto">
            Start a project
          </a>
          <a href="/work" className="btn-secondary w-full sm:w-auto gap-2">
            See our work
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 border-t sm:border-t-0 sm:border-none border-outline-variant/30 pt-8 sm:pt-0">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-on-surface">50+</span>
            <span className="text-sm text-on-surface-variant mt-1">Projects delivered</span>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-outline-variant/30"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-on-surface">14 days</span>
            <span className="text-sm text-on-surface-variant mt-1">Average turnaround</span>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-outline-variant/30"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-on-surface">100%</span>
            <span className="text-sm text-on-surface-variant mt-1">Code ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
