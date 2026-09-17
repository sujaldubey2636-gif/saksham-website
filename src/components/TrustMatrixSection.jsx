import React from 'react';
import Card3D from './Card3D';

const TrustMatrixSection = () => {
  const sakshamItems = [
    'Direct senior engineer',
    '7-14 day delivery',
    '100% code ownership',
    'Fixed milestone pricing',
    '30-day post-launch support',
  ];

  const agencyItems = [
    'Junior account managers',
    '3-6 month timelines',
    'Proprietary lock-in',
    'Hourly billing surprises',
    'Expensive retainers',
  ];

  const freelancerItems = [
    'Often unavailable',
    'Unpredictable timelines',
    'Messy handoffs',
    'Pay per task',
    'No support guarantees',
  ];

  return (
    <section className="w-full py-24 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#121316] border-b border-[#2A2D35]">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-12 animate-on-scroll">
        <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// COMPARISON</span>
        <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
          The SAKSHAM difference
        </h2>
        <p className="text-lg text-[#8A919E] max-w-2xl mt-4">
          See how we stack up against traditional options. We believe in direct communication, speed, and complete transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Team SAKSHAM — Highlighted */}
        <Card3D maxTilt={6} glare={true} scale={1.02} borderGlow={true} glowColor="rgba(229,142,38,0.6)" className="animate-on-scroll" style={{ transitionDelay: '0ms' }}>
          <div className="group bg-[#1A1C21] border border-[#E58E26]/30 hover:border-[#E58E26]/60 rounded-xl p-8 flex flex-col gap-6 transition-all duration-500 h-full relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E58E26]/5 rounded-full blur-3xl group-hover:bg-[#E58E26]/10 transition-all duration-700" />

            <div className="relative">
              <h3 className="text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">Team SAKSHAM</h3>
              <span className="text-sm text-[#E58E26] mt-1 block font-mono">The modern partner</span>
            </div>
            <ul className="flex flex-col gap-4 relative">
              {sakshamItems.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 animate-on-scroll"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="material-symbols-outlined text-[#E58E26] mt-0.5 text-xl group-hover:scale-110 transition-transform duration-300">check_circle</span>
                  <span className="text-[#F0F1F3] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card3D>

        {/* Agencies */}
        <Card3D maxTilt={5} glare={false} scale={1.01} borderGlow={true} glowColor="rgba(244,63,94,0.3)" className="animate-on-scroll" style={{ transitionDelay: '120ms' }}>
          <div className="group bg-[#1A1C21] border border-[#2A2D35] hover:border-rose-900/40 rounded-xl p-8 flex flex-col gap-6 transition-all duration-500 h-full">
            <div>
              <h3 className="text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">Agencies</h3>
              <span className="text-sm text-[#6b7280] mt-1 block font-mono">Traditional & slow</span>
            </div>
            <ul className="flex flex-col gap-4">
              {agencyItems.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 animate-on-scroll"
                  style={{ transitionDelay: `${i * 80 + 120}ms` }}
                >
                  <span className="material-symbols-outlined text-[#6b7280] group-hover:text-rose-500/60 mt-0.5 text-xl transition-colors duration-300">cancel</span>
                  <span className="text-[#8A919E] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card3D>

        {/* Freelancers */}
        <Card3D maxTilt={5} glare={false} scale={1.01} borderGlow={true} glowColor="rgba(244,63,94,0.3)" className="animate-on-scroll" style={{ transitionDelay: '240ms' }}>
          <div className="group bg-[#1A1C21] border border-[#2A2D35] hover:border-rose-900/40 rounded-xl p-8 flex flex-col gap-6 transition-all duration-500 h-full">
            <div>
              <h3 className="text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">Freelancers</h3>
              <span className="text-sm text-[#6b7280] mt-1 block font-mono">Hit or miss</span>
            </div>
            <ul className="flex flex-col gap-4">
              {freelancerItems.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 animate-on-scroll"
                  style={{ transitionDelay: `${i * 80 + 240}ms` }}
                >
                  <span className="material-symbols-outlined text-[#6b7280] group-hover:text-rose-500/60 mt-0.5 text-xl transition-colors duration-300">cancel</span>
                  <span className="text-[#8A919E] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card3D>
      </div>
    </section>
  );
};

export default TrustMatrixSection;
