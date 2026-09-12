import React, { useState } from 'react';

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const pos = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

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
            Drag the slider to see why speed isn't a vanity metric — it directly dictates whether visitors convert or bounce.
          </p>
        </div>

        {/* Comparison Board */}
        <div className="w-full rounded-lg bg-[#1A1C21] border border-[#2A2D35] overflow-hidden shadow-2xl">
          
          {/* Interactive Slider Area */}
          <div
            className="relative w-full min-h-[380px] sm:min-h-[340px] cursor-ew-resize select-none overflow-hidden"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Right Side: SAKSHAM Clean Build (Base layer) */}
            <div className="absolute inset-0 bg-[#16181D] p-6 sm:p-10 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="px-3 py-1 rounded bg-[#276375]/30 text-[#4cd7f6] border border-[#276375]/50 text-xs font-mono font-medium">
                  SAKSHAM Clean Architecture
                </span>
              </div>

              <div className="max-w-md ml-auto text-right space-y-4 font-mono">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-emerald-400">0.4s</div>
                  <div className="text-xs text-[#8A919E] mt-0.5">Sub-second First Contentful Paint</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2A2D35]">
                  <div>
                    <div className="text-lg font-bold text-emerald-400">99/100</div>
                    <div className="text-[11px] text-[#8A919E]">PageSpeed Score</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#F0F1F3]">28 kB</div>
                    <div className="text-[11px] text-[#8A919E]">Total Bundle Size</div>
                  </div>
                </div>
                <div className="text-xs text-emerald-400 pt-2 flex items-center justify-end gap-1.5">
                  <span>&#10003; 100% GitHub Code Ownership on Day 1</span>
                </div>
              </div>

              <div className="text-right text-[11px] font-mono text-[#8A919E]">
                React &bull; Next.js / Astro &bull; Tailwind v4 &bull; Webhooks
              </div>
            </div>

            {/* Left Side: Bloated Build (Clipped layer) */}
            <div
              className="absolute inset-0 bg-[#1c1416] p-6 sm:p-10 flex flex-col justify-between border-r-2 border-[#E58E26]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="flex justify-start">
                <span className="px-3 py-1 rounded bg-rose-950/50 text-rose-300 border border-rose-800/40 text-xs font-mono font-medium">
                  Typical Agency / WordPress Stack
                </span>
              </div>

              <div className="max-w-md text-left space-y-4 font-mono">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-rose-400">3.8s</div>
                  <div className="text-xs text-[#8A919E] mt-0.5">Severe mobile visitor drop-off</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-rose-950/60">
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

              <div className="text-left text-[11px] font-mono text-[#8A919E]">
                Heavy Page Builders &bull; Uncached DB Queries &bull; Fragile Plugins
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#E58E26] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#E58E26] text-[#121316] font-bold text-xs flex items-center justify-center shadow-lg font-mono">
                &harr;
              </div>
            </div>

          </div>

          {/* Bottom Bar: Interactive presets */}
          <div className="px-6 py-3 bg-[#141619] border-t border-[#2A2D35] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8A919E]">
            <div className="flex items-center gap-2">
              <span>View mode:</span>
              <button
                type="button"
                onClick={() => setSliderPos(20)}
                className="px-2 py-0.5 rounded bg-[#1A1C21] hover:text-[#F0F1F3] border border-[#2A2D35]"
              >
                Inspect SAKSHAM
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className="px-2 py-0.5 rounded bg-[#1A1C21] hover:text-[#F0F1F3] border border-[#2A2D35]"
              >
                Split 50/50
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(80)}
                className="px-2 py-0.5 rounded bg-[#1A1C21] hover:text-[#F0F1F3] border border-[#2A2D35]"
              >
                Inspect Legacy
              </button>
            </div>
            <span className="text-[#E58E26]">&#9679; Drag anywhere on the card to inspect</span>
          </div>

        </div>

      </div>
    </section>
  );
}
