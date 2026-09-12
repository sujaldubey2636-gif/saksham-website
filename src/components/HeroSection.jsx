import React, { useState } from 'react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('diff');

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-[#121316] text-[#F0F1F3] px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Direct Pitch (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status line: honest availability */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A919E] mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E58E26]"></span>
            <span>building right now</span>
            <span className="text-[#2A2D35]">•</span>
            <span>next opening: october</span>
          </div>

          {/* Headline: Straight talk */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F0F1F3] leading-[1.08] font-['Bricolage_Grotesque',sans-serif]">
            I design websites, wire up databases, and automate your manual busywork.
          </h1>

          {/* Body: No-BS scope & guarantee */}
          <p className="mt-6 text-base sm:text-lg text-[#8A919E] max-w-xl leading-relaxed font-['IBM_Plex_Sans',sans-serif]">
            No account managers, no 40-page slide decks, and no outsourcing to random subcontractors. You work directly with me, you review working code every 3 days, and everything is pushed to your own GitHub on day one.
          </p>

          {/* Primary Action + Direct Line */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center px-5 py-3 rounded text-sm font-medium bg-[#E58E26] text-[#121316] hover:bg-[#d07e1e] transition-colors font-mono tracking-tight"
            >
              Discuss a project &rarr;
            </a>

            <a
              href="#work-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center px-5 py-3 rounded text-sm font-medium bg-[#1A1C21] text-[#F0F1F3] border border-[#2A2D35] hover:border-[#8A919E] transition-colors font-mono"
            >
              Inspect recent builds
            </a>
          </div>

          {/* Real, Grounded Stats Strip */}
          <div className="mt-14 pt-6 border-t border-[#2A2D35] w-full grid grid-cols-3 gap-6 font-mono">
            <div>
              <div className="text-2xl font-bold text-[#F0F1F3]">7</div>
              <div className="text-xs text-[#8A919E] mt-1">ships this year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#F0F1F3]">0</div>
              <div className="text-xs text-[#8A919E] mt-1">account managers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#E58E26]">100%</div>
              <div className="text-xs text-[#8A919E] mt-1">code ownership</div>
            </div>
          </div>

        </div>

        {/* Right Column: Tangible Work Inspector (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full rounded-lg bg-[#1A1C21] border border-[#2A2D35] overflow-hidden shadow-2xl font-mono text-xs">
            
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#141619] border-b border-[#2A2D35]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A2D35]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A2D35]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A2D35]"></span>
                <span className="ml-2 text-[#8A919E] text-[11px]">release_v2.4.log</span>
              </div>
              
              <div className="flex gap-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveTab('diff')}
                  className={`px-2 py-0.5 rounded ${activeTab === 'diff' ? 'bg-[#2A2D35] text-[#F0F1F3]' : 'text-[#8A919E] hover:text-[#F0F1F3]'}`}
                >
                  git-diff
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  className={`px-2 py-0.5 rounded ${activeTab === 'stack' ? 'bg-[#2A2D35] text-[#F0F1F3]' : 'text-[#8A919E] hover:text-[#F0F1F3]'}`}
                >
                  stack
                </button>
              </div>
            </div>

            {/* Terminal / Code Body */}
            <div className="p-5 text-[#8A919E] leading-relaxed select-none min-h-[260px] flex flex-col justify-between">
              {activeTab === 'diff' ? (
                <div className="space-y-2">
                  <div className="text-[#F0F1F3]">
                    <span className="text-[#E58E26] font-bold">commit 85bae00</span> (HEAD -&gt; main)
                  </div>
                  <div className="text-[#8A919E]">Author: Saksham &lt;direct@saksham.dev&gt;</div>
                  <div className="text-[#8A919E]">Date:   Yesterday, 18:42:10 IST</div>
                  
                  <div className="pt-3 text-[#F0F1F3]">
                    feat(dispatch): strip out bloated framework
                  </div>
                  <div className="text-emerald-400">
                    + 340 lines (pure react + webhook pipeline)
                  </div>
                  <div className="text-rose-400">
                    - 1,530 lines (unneeded plugins &amp; legacy scripts)
                  </div>
                  
                  <div className="pt-3 border-t border-[#2A2D35] text-[11px] text-[#8A919E]">
                    Bundle size: <span className="text-[#F0F1F3]">26.8 kB</span> &bull; TTFB: <span className="text-emerald-400">42ms</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-[#F0F1F3] font-bold">Production Stack Choice:</div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2 rounded bg-[#141619] border border-[#2A2D35]">
                      <div className="text-[#E58E26]">Frontend</div>
                      <div className="text-[#F0F1F3] mt-0.5">React / Next.js / Astro</div>
                    </div>
                    <div className="p-2 rounded bg-[#141619] border border-[#2A2D35]">
                      <div className="text-[#E58E26]">Styling</div>
                      <div className="text-[#F0F1F3] mt-0.5">Tailwind v4 / Clean CSS</div>
                    </div>
                    <div className="p-2 rounded bg-[#141619] border border-[#2A2D35]">
                      <div className="text-[#E58E26]">Backend / DB</div>
                      <div className="text-[#F0F1F3] mt-0.5">Supabase / Node / PostgreSQL</div>
                    </div>
                    <div className="p-2 rounded bg-[#141619] border border-[#2A2D35]">
                      <div className="text-[#E58E26]">Pipes</div>
                      <div className="text-[#F0F1F3] mt-0.5">Make / Stripe / Resend</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Single deliberate motion: blinking cursor prompt */}
              <div className="pt-4 flex items-center gap-1 text-[#8A919E]">
                <span className="text-[#E58E26]">&gt;</span>
                <span>status: ready for deployment</span>
                <span className="inline-block w-2 h-3.5 bg-[#E58E26] animate-[pulse_1s_steps(2,start)_infinite]"></span>
              </div>
            </div>

            {/* Inspector bottom metadata bar */}
            <div className="px-4 py-2 bg-[#141619] border-t border-[#2A2D35] flex items-center justify-between text-[11px] text-[#8A919E]">
              <span>branch: production</span>
              <span className="text-emerald-400 font-medium">zero dependencies pending</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
