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
    <section id="faq-section" className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-tertiary">Zero Hesitation</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            Everything you need to know before partnering with us. If you have any other question, message Saksham directly.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-space-xs max-w-3xl">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-xl bg-surface-container/70 ring-1 ring-outline-variant/20 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-space-md flex items-center justify-between text-left gap-space-sm hover:bg-surface-container transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline text-sm font-semibold text-on-surface">
                    {faq.q}
                  </span>
                  <span className={`material-symbols-outlined text-[20px] text-primary transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-space-md pb-space-md pt-0 text-xs font-body text-on-surface-variant leading-relaxed border-t border-surface-bright/20 mt-1">
                    <p className="pt-space-xs">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-space-md rounded-xl bg-surface-container-low ring-1 ring-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm max-w-3xl">
          <div className="flex items-center gap-space-sm text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">contact_support</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-xs font-bold text-on-surface">Have a specific or unusual technical requirement?</span>
              <span className="font-body text-[11px] text-outline">We reply to WhatsApp and email questions in under 2 hours.</span>
            </div>
          </div>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high ring-1 ring-tertiary/30 text-tertiary text-xs font-label font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Ask on WhatsApp</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
