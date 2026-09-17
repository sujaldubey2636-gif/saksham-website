import React from 'react';

const AboutSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about-section" className="scroll-mt-24 py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto">

        {/* Top: Two-Column Hero Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 animate-on-scroll">
          {/* Left: Big Heading */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-[#E58E26] font-semibold tracking-wider uppercase">// WHO WE ARE</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3] leading-[1.1]">
              We build what your
              <span className="text-[#E58E26]"> business </span>
              actually needs.
            </h2>
          </div>

          {/* Right: Description Paragraphs */}
          <div className="flex flex-col gap-6 justify-center">
            <p className="text-lg text-[#8A919E] leading-relaxed">
              We help businesses get online, save time, and grow — using websites, AI automation, and marketing that's built to actually work.
            </p>
            <p className="text-base text-[#8A919E] leading-relaxed">
              Whether you need a professional website that brings in customers, smart AI systems that handle repetitive tasks, or digital marketing that gets you found by the right people — we deliver all three under one roof.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2A2D35] my-16 lg:my-20"></div>

        {/* Bottom: Why Work With Us - Horizontal Stats-Style Layout */}
        <div className="animate-on-scroll">
          <h3 className="text-sm font-mono text-[#8A919E] uppercase tracking-widest mb-10">Why work with us</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            {/* Stat 1 */}
            <div className="flex flex-col gap-2 border-l-2 border-[#E58E26] pl-5">
              <span className="text-2xl md:text-3xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">Affordable</span>
              <span className="text-sm text-[#8A919E] leading-relaxed">No big-agency price tags. Enterprise quality at startup-friendly costs.</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-2 border-l-2 border-[#4cd7f6] pl-5">
              <span className="text-2xl md:text-3xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">Fast</span>
              <span className="text-sm text-[#8A919E] leading-relaxed">You're not waiting weeks for basic updates. We ship in days, not months.</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-2 border-l-2 border-[#10b981] pl-5">
              <span className="text-2xl md:text-3xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">Modern</span>
              <span className="text-sm text-[#8A919E] leading-relaxed">We use the latest AI tools, so what we build saves you effort — not just looks nice.</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-2 border-l-2 border-[#d0bcff] pl-5">
              <span className="text-2xl md:text-3xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">Direct</span>
              <span className="text-sm text-[#8A919E] leading-relaxed">You talk straight to the team doing the work. No middlemen, no runaround.</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-xl bg-[#1A1C21] border border-[#2A2D35] animate-on-scroll">
          <div>
            <h3 className="text-xl md:text-2xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3]">
              Ready to grow your business?
            </h3>
            <p className="text-sm text-[#8A919E] mt-1">Let's talk about what we can build together.</p>
          </div>
          <button
            onClick={scrollToContact}
            className="btn-primary text-base px-8 py-4 cursor-pointer shrink-0"
          >
            Get in touch →
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
