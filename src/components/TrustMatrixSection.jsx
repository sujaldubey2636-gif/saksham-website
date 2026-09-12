import React from 'react';

const TrustMatrixSection = () => {
  return (
    <section className="w-full py-24 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#121316] border-b border-[#2A2D35]">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-12">
        <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// COMPARISON</span>
        <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
          The SAKSHAM difference
        </h2>
        <p className="text-lg text-[#8A919E] max-w-2xl mt-4">
          See how we stack up against traditional options. We believe in direct communication, speed, and complete transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Team SAKSHAM */}
        <div className="bg-[#1A1C21] border border-[#E58E26]/20 rounded-xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">Team SAKSHAM</h3>
            <span className="text-sm text-[#E58E26] mt-1 block">The modern partner</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#E58E26] mt-0.5 text-xl">check_circle</span>
              <span className="text-[#F0F1F3] text-base">Direct senior engineer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#E58E26] mt-0.5 text-xl">check_circle</span>
              <span className="text-[#F0F1F3] text-base">7-14 day delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#E58E26] mt-0.5 text-xl">check_circle</span>
              <span className="text-[#F0F1F3] text-base">100% code ownership</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#E58E26] mt-0.5 text-xl">check_circle</span>
              <span className="text-[#F0F1F3] text-base">Fixed milestone pricing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#E58E26] mt-0.5 text-xl">check_circle</span>
              <span className="text-[#F0F1F3] text-base">30-day post-launch support</span>
            </li>
          </ul>
        </div>

        {/* Agencies */}
        <div className="bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">Agencies</h3>
            <span className="text-sm text-[#6b7280] mt-1 block">Traditional & slow</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Junior account managers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">3-6 month timelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Proprietary lock-in</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Hourly billing surprises</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Expensive retainers</span>
            </li>
          </ul>
        </div>

        {/* Freelancers */}
        <div className="bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">Freelancers</h3>
            <span className="text-sm text-[#6b7280] mt-1 block">Hit or miss</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Often unavailable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Unpredictable timelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Messy handoffs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">Pay per task</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6b7280] mt-0.5 text-xl">cancel</span>
              <span className="text-[#8A919E] text-base">No support guarantees</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustMatrixSection;
