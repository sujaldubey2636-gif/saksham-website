import React from 'react';

const AboutSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about-section" className="scroll-mt-24 py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl animate-on-scroll">
          <span className="text-xs font-mono text-[#E58E26] font-semibold tracking-wider uppercase">// WHO WE ARE</span>
          <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
            About Team SAKSHAM
          </h2>
          <p className="text-lg text-[#8A919E] leading-relaxed mt-2">
            We help businesses get online, save time, and grow — using websites, AI automation, and marketing that's built to actually work.
          </p>
        </div>

        {/* What We Do */}
        <div className="flex flex-col gap-8 animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">
            What we do for you
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card: Websites */}
            <div className="bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-4 hover:border-[#E58E26]/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#E58E26]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-[#E58E26]">language</span>
              </div>
              <h4 className="text-lg font-bold text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">Websites</h4>
              <p className="text-sm text-[#8A919E] leading-relaxed">
                We build fast, modern, professional websites that make your business look credible and bring in customers — not just a page that sits there.
              </p>
            </div>

            {/* Card: AI Automation */}
            <div className="bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-4 hover:border-[#4cd7f6]/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#4cd7f6]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-[#4cd7f6]">smart_toy</span>
              </div>
              <h4 className="text-lg font-bold text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">AI Automation</h4>
              <p className="text-sm text-[#8A919E] leading-relaxed">
                We set up smart systems that handle repetitive tasks for you — responding to customer queries, managing leads, or organizing data — so you save time and don't need extra staff.
              </p>
            </div>

            {/* Card: Digital Marketing */}
            <div className="bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col gap-4 hover:border-[#d0bcff]/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#d0bcff]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-[#d0bcff]">trending_up</span>
              </div>
              <h4 className="text-lg font-bold text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">Digital Marketing</h4>
              <p className="text-sm text-[#8A919E] leading-relaxed">
                We help you get found by the right people online, so your business grows instead of staying invisible.
              </p>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="flex flex-col gap-8 animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">
            Why work with us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'payments', label: 'Affordable', desc: 'No big-agency price tags' },
              { icon: 'bolt', label: 'Fast', desc: "You're not waiting weeks for basic updates" },
              { icon: 'auto_awesome', label: 'Modern', desc: 'We use the latest AI tools, so what we build saves you effort — not just looks nice' },
              { icon: 'forum', label: 'Direct', desc: 'You talk straight to the team doing the work, no middlemen' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-3 p-6 rounded-xl bg-[#1A1C21]/50 border border-[#2A2D35] hover:border-[#E58E26]/30 transition-colors">
                <span className="material-symbols-outlined text-2xl text-[#E58E26]">{item.icon}</span>
                <span className="text-base font-bold text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">{item.label}</span>
                <span className="text-sm text-[#8A919E] leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center gap-6 pt-4 animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">
            Ready to grow your business?
          </h3>
          <button
            onClick={scrollToContact}
            className="btn-primary text-base px-8 py-4 cursor-pointer"
          >
            Get in touch →
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
