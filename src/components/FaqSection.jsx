import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What if the initial design or prototype does not match what I had in mind?',
    a: 'We eliminate that risk entirely during Phase 2 (Interactive Prototype). You get a clickable, interactive preview of your site or workflow before we touch production code. We iterate together until you are 100% thrilled with the design and flow before signing off on the build milestone.',
  },
  {
    q: 'Do I really own 100% of the source code, hosting, and assets?',
    a: 'Yes, unconditionally. On launch day, we transfer the complete GitHub repository, Figma design files, database credentials, and deployment pipelines directly to your accounts. You are never locked into our studio, and any developer in the world can pick up our clean, modern code.',
  },
  {
    q: 'How do we communicate throughout the sprint?',
    a: 'You communicate directly with Saksham (the senior engineer actually building your product), never an intern or non-technical account manager. We set up a private Slack or WhatsApp channel for rapid questions, accompanied by recorded Loom video walkthroughs at every milestone so you can review progress whenever convenient.',
  },
  {
    q: 'Are there any hidden costs, monthly retainers, or unexpected invoices?',
    a: 'Zero. Every project is quoted on a transparent, fixed-scope milestone basis. What we agree upon is exactly what you pay. Standard hosting runs on high-reliability, low-cost or free tiers (Vercel, Netlify, Supabase) directly under your name, saving you thousands in unnecessary agency markup.',
  },
  {
    q: 'What happens if a bug or issue appears after we go live?',
    a: 'Every single build comes with 30 days of comprehensive Post-Launch Hypercare included at no extra cost. If an API webhook drops, an edge case appears, or you need minor adjustments, we respond and patch it within hours.',
  },
  {
    q: 'Why choose Team SAKSHAM over hiring a full-time in-house developer or agency?',
    a: 'A qualified senior full-stack engineer costs upwards of $130,000/yr plus benefits and recruiting overhead. Traditional agencies charge $20k+ and move at a snail pace through layers of bureaucracy. Team SAKSHAM delivers enterprise-grade software and automated pipelines in 7–14 days for a fraction of the cost, with zero management drag on your schedule.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-24 lg:py-32 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="section-label text-primary text-sm font-semibold tracking-wider uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-on-surface mt-2">
            Common questions
          </h2>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto mt-4">
            Everything you need to know before partnering with us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-12 flex flex-col">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-outline-variant/30">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-base font-medium text-on-surface pr-8">
                    {faq.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 text-sm text-on-surface-variant leading-relaxed pr-8">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
