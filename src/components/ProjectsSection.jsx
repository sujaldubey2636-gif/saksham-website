import React, { useState } from 'react';

const PROJECTS = [
  {
    title: 'Aura Studio',
    category: 'Web Application & Booking Engine',
    description:
      'Boutique dental & wellness booking engine featuring unified calendar sync, instant SMS reminders, and zero checkout friction.',
    metric: { icon: 'speed', label: '99/100 PageSpeed' },
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9G-TwQ1GEcGHRP8HHQPO9L0XjBmhhFQKaaCQdemTy5Skq_D1nX1m3BC5Nhsd4a2mYHuwOYnmnxknMP_gFRRq_vQFab0VxUmp2Yk3wOc5HG43BMY4BUImTJhA0VnavOIWwKmmdSNPbSh4Tds8rxQUgG4qphSVNL3E9m5Vy09lNd0KXfXWF1MCT3d9BV8FqoRaCEyUMBE2SIXTY8oazKR_lJHB2ueXIyQ1VeCmC44angNiO2llUiLAi',
    imageAlt: 'Aura Studio dental booking app dark mode UI on iPhone mockup',
    caseStudy: {
      problem:
        'Aura was losing 4 out of 10 incoming patients because their legacy WordPress site took 4.2 seconds to load on mobile and booking required manual back-and-forth WhatsApp coordination.',
      solution:
        'Re-engineered from scratch with Next.js and Cal.com API webhooks. Implemented Twilio SMS confirmations and instant calendar slot reserving directly from the hero fold.',
      outcome:
        '+142% booked appointments in the first 30 days post-launch. Page load time dropped from 4.2s to 0.38s.',
      stack: ['Next.js 14', 'Tailwind CSS', 'Cal.com API', 'Twilio Webhooks', 'Vercel Edge'],
    },
  },
  {
    title: 'Apex Logistics',
    category: 'Workflow & Dispatch Automation',
    description:
      'Automated dispatch and invoice pipeline routing 50+ regional shipments daily, generating PDF bill-of-lading and instant customer notifications.',
    metric: { icon: 'schedule', label: '14 hrs/wk Saved' },
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-jbbPrfdESCP2GDAgwHSnUU2IWrJYWzdyeNOZJzZRTSh6OkzFriuO4L8P-HpIGtPzu5gJ4xAEtSJu74oSD_QwdI_SIAFRWMVHhMGGuwHePXP4xU0gBxYbbrQEIxl7aJOhf2Skz90CFBA84U_YPp5SLYY53UjrywmOE1IAiJ6vzUdvlD8JxQE9HF8fvwm-Y29Wk20DtN-vrjjvESFZ6lppXjN1Et8N9Xii2uVn1TdF30SuEQ5-yteE',
    imageAlt: 'Apex Logistics dark futuristic automation dashboard with telemetry maps',
    caseStudy: {
      problem:
        'Two dispatch coordinators spent 3 hours every morning manually re-keying driver manifests into spreadsheets, generating invoices in Word, and emailing PDF receipts one by one.',
      solution:
        'Engineered an automated Make + Airtable pipeline that ingests route requests, assigns the closest driver via distance algorithm, auto-generates branded PDF bills of lading, and triggers customer tracking emails.',
      outcome:
        'Saved 14 hours per week of manual clerical overhead. Order dispatch speed improved from 45 minutes to 30 seconds.',
      stack: ['Make (Integromat)', 'Airtable Schema', 'REST Webhooks', 'PDF Generation API', 'SendGrid'],
    },
  },
  {
    title: 'Pulse Coffee Roasters',
    category: 'E-Commerce & Retention Architecture',
    description:
      'D2C artisan coffee storefront engineered for subscription recurring revenue with automated 4-stage post-purchase retention sequence.',
    metric: { icon: 'repeat', label: '32% Recurring Ratio' },
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6iCqZYvwjKgx7qyRTFEJ1xwNqQoEd0BemwnciouQxA4mpGxW3kBefkgAVkNHtupBPrbvHH3XPhxPUYsrzitqLCl52Do1XmkY1Tbt-vejO3iczU6WDD9ccGZ6ahNaOQeEGT13OR_KDVsCsjg8pjxAxr9ej5RHTzZhL8rpvCQmqLIwhBIlCiF6VgVKVRsJZd54UBFJuZZQTt1ifsfYlP7Fr3iaFrCPn0VtD9or0QMF22TwWr6HhD_7P',
    imageAlt: 'Pulse Coffee artisanal ecommerce product page on dark canvas',
    caseStudy: {
      problem:
        'Pulse had strong initial purchases from Instagram ads, but near-zero repeat buyers. Their generic theme gave them no control over subscriptions or automated replenishment reminders.',
      solution:
        'Built a custom headless Shopify storefront featuring 1-click subscription tiers, personalized grind preference quiz, and automated 4-stage post-purchase email flows in Klaviyo.',
      outcome:
        'Achieved 32% recurring subscriber ratio within 60 days. Customer lifetime value increased by 48%.',
      stack: ['Shopify Custom', 'Liquid & React', 'Klaviyo Flows', 'Recharge Subscriptions'],
    },
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="work-section"
      className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E58E26] mb-3">
            <span>// RECENT SHIPS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">
            Real systems in production.
          </h2>
          <p className="text-base text-[#8A919E] max-w-2xl mt-3 font-['IBM_Plex_Sans',sans-serif]">
            Click any project to inspect the client's bottleneck, technical architecture, and verifiable outcome.
          </p>
        </header>

        <div className="flex flex-col gap-16">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start group"
            >
              <div
                onClick={() => setActiveProject(project)}
                className="w-full lg:w-3/5 rounded-lg bg-[#1A1C21] border border-[#2A2D35] overflow-hidden shrink-0 cursor-pointer group-hover:border-[#E58E26]/50 transition-colors"
              >
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full aspect-video object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="w-full lg:w-2/5 flex flex-col items-start font-['IBM_Plex_Sans',sans-serif]">
                <span className="text-xs font-mono text-[#276375] bg-[#276375]/15 px-2.5 py-1 rounded border border-[#276375]/30 uppercase tracking-wide">
                  {project.category}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F0F1F3] mt-3 font-['Bricolage_Grotesque',sans-serif]">
                  {project.title}
                </h3>
                
                <p className="text-sm text-[#8A919E] mt-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-sm font-mono text-emerald-400">
                  <span className="material-symbols-outlined text-[18px]">
                    {project.metric.icon}
                  </span>
                  <span>{project.metric.label}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-[#E58E26] hover:text-[#d07e1e] font-semibold tracking-tight border-b border-[#E58E26]/40 pb-0.5"
                >
                  <span>Inspect Case Study &amp; Architecture &rarr;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-[#8A919E] hover:text-[#F0F1F3] p-1 rounded font-mono text-xs"
            >
              &#10005; [close]
            </button>

            {/* Header */}
            <div className="flex flex-col gap-1 pr-8">
              <span className="text-xs font-mono text-[#E58E26]">CASE STUDY INSPECTION</span>
              <h3 className="text-2xl font-bold text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">
                {activeProject.title}
              </h3>
              <span className="text-xs font-mono text-[#8A919E]">{activeProject.category}</span>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-6 font-['IBM_Plex_Sans',sans-serif] text-sm">
              
              <div className="p-4 rounded bg-[#141619] border border-[#2A2D35]">
                <div className="text-xs font-mono text-rose-400 font-semibold mb-1">THE BOTTLENECK</div>
                <p className="text-[#8A919E] leading-relaxed">
                  {activeProject.caseStudy.problem}
                </p>
              </div>

              <div className="p-4 rounded bg-[#141619] border border-[#2A2D35]">
                <div className="text-xs font-mono text-[#4cd7f6] font-semibold mb-1">THE ENGINEERING SOLUTION</div>
                <p className="text-[#8A919E] leading-relaxed">
                  {activeProject.caseStudy.solution}
                </p>
              </div>

              <div className="p-4 rounded bg-[#141619] border border-emerald-900/40">
                <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">MEASURABLE OUTCOME</div>
                <p className="text-[#F0F1F3] leading-relaxed font-medium">
                  {activeProject.caseStudy.outcome}
                </p>
              </div>

              {/* Stack */}
              <div>
                <div className="text-xs font-mono text-[#8A919E] mb-2">DEPLOYED STACK</div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.caseStudy.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded bg-[#141619] border border-[#2A2D35] text-xs font-mono text-[#F0F1F3]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#2A2D35] flex items-center justify-between">
                <a
                  href="#contact-section"
                  onClick={() => setActiveProject(null)}
                  className="btn-primary text-xs"
                >
                  Discuss a similar build with Saksham &rarr;
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="text-xs font-mono text-[#8A919E] hover:text-[#F0F1F3]"
                >
                  Back to projects
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
