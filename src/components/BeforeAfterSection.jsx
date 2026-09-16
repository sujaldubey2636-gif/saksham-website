import React from 'react';

export default function BeforeAfterSection() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-28 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2 text-left max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E58E26]">
            <span>// PROOF OF PERFORMANCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">
            Legacy agency bloat vs. SAKSHAM clean code.
          </h2>
          <p className="text-base text-[#8A919E] font-['IBM_Plex_Sans',sans-serif]">
            See why speed isn't a vanity metric — it directly dictates whether visitors convert or bounce.
          </p>
        </div>

        {/* Comparison Board */}
        <div className="w-full rounded-lg bg-[#1A1C21] border border-[#2A2D35] overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px] sm:min-h-[340px]">
            
            {/* Left Side: Bloated Build */}
            <div className="bg-[#1c1416] p-6 sm:p-10 flex flex-col justify-between md:border-r border-b md:border-b-0 border-[#E58E26]">
              <div className="flex justify-start">
                <span className="px-3 py-1 rounded bg-rose-950/50 text-rose-300 border border-rose-800/40 text-xs font-mono font-medium">
                  Typical Agency / WordPress Stack
                </span>
              </div>

              <div className="max-w-md text-left space-y-4 font-mono mt-8 md:mt-0">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-rose-400">3.8s</div>
                  <div className="text-xs text-[#8A919E] mt-0.5">Severe mobile visitor drop-off</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-rose-950/60 animate-on-scroll delay-100">
                  <div>
                    <div className="text-lg font-bold text-rose-400">41/100</div>
                    <div className="text-[11px] text-[#8A919E]">PageSpeed Score</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-rose-300">2.8 MB</div>
                    <div className="text-[11px] text-[#8A919E]">45+ Plugins &amp; Trackers</div>
                  </div>
                </div>
                <div className="text-xs text-rose-400 pt-2 flex items-center gap-1.5">
                  <span>&#10007; Code locked behind monthly agency retainer</span>
                </div>
              </div>

              <div className="text-left text-[11px] font-mono text-[#8A919E] mt-8 md:mt-0">
                Heavy Page Builders &bull; Uncached DB Queries &bull; Fragile Plugins
              </div>
            </div>

            {/* Right Side: SAKSHAM Clean Build */}
            <div className="bg-[#16181D] p-6 sm:p-10 flex flex-col justify-between">
              <div className="flex justify-start md:justify-end">
                <span className="px-3 py-1 rounded bg-[#276375]/30 text-[#4cd7f6] border border-[#276375]/50 text-xs font-mono font-medium">
                  SAKSHAM Clean Architecture
                </span>
              </div>

              <div className="max-w-md md:ml-auto text-left md:text-right space-y-4 font-mono mt-8 md:mt-0">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-emerald-400">0.4s</div>
                  <div className="text-xs text-[#8A919E] mt-0.5">Sub-second First Contentful Paint</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2A2D35] animate-on-scroll delay-100">
                  <div>
                    <div className="text-lg font-bold text-emerald-400">99/100</div>
                    <div className="text-[11px] text-[#8A919E]">PageSpeed Score</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#F0F1F3]">28 kB</div>
                    <div className="text-[11px] text-[#8A919E]">Total Bundle Size</div>
                  </div>
                </div>
                <div className="text-xs text-emerald-400 pt-2 flex items-center justify-start md:justify-end gap-1.5">
                  <span>&#10003; 100% GitHub Code Ownership</span>
                </div>
              </div>

              <div className="text-left md:text-right text-[11px] font-mono text-[#8A919E] mt-8 md:mt-0">
                React &bull; Next.js / Astro &bull; Tailwind v4 &bull; Webhooks
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
