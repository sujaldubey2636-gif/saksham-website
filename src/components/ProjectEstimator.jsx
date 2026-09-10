import React, { useState } from 'react';

const PROJECT_TYPES = [
  {
    id: 'website',
    name: 'High-Converting Website',
    desc: 'Bespoke responsive site, modern CMS, SEO & 99+ PageSpeed',
    baseDays: 7,
    deliverables: [
      'Custom Responsive UI (Mobile + Desktop)',
      'Sub-second page load performance (99+ PageSpeed)',
      'SEO meta architecture & schema markup',
      'Lead capture forms & CRM integration',
      'Full GitHub source code & asset handoff',
    ],
  },
  {
    id: 'webapp',
    name: 'Custom Web Application',
    desc: 'Interactive portal, booking system, or client dashboard',
    baseDays: 12,
    deliverables: [
      'Interactive React / Next.js frontend',
      'User auth & database connection',
      'Payment processing (Stripe / Razorpay)',
      'Automated email/SMS notification triggers',
      'Clean modular architecture for easy scaling',
    ],
  },
  {
    id: 'automation',
    name: 'Workflow & API Automation',
    desc: 'Eliminate manual paperwork with Make, Zapier & webhooks',
    baseDays: 5,
    deliverables: [
      'End-to-end webhook & API integration',
      'Automated intake funnel (Form → CRM → Invoice)',
      'Error handling & automated failure alerts',
      'Video documentation & team SOP walkthrough',
      'Zero manual data re-entry',
    ],
  },
  {
    id: 'overhaul',
    name: 'Complete Digital Overhaul',
    desc: 'Full website + automated operational pipeline',
    baseDays: 14,
    deliverables: [
      'All deliverables from Website + Automation',
      'Full brand asset & typography refresh',
      'Speed audit & legacy code migration',
      'Dedicated Slack/WhatsApp channel with Saksham',
      '30-day extended hypercare & live monitoring',
    ],
  },
];

const TIMELINES = [
  { id: 'standard', label: 'Standard Sprint', note: 'Carefully paced & thoroughly tested', modifier: 0 },
  { id: 'rapid', label: 'Fast-Track Priority', note: 'Hyper-focused dedicated sprint', modifier: -3 },
];

const ASSET_STAGES = [
  { id: 'ready', label: 'I have brand & content ready', note: 'Faster kickoff & build' },
  { id: 'scratch', label: 'Starting from scratch', note: 'We will write copy & structure assets' },
];

const ProjectEstimator = ({ onSelectScope }) => {
  const [selectedType, setSelectedType] = useState('website');
  const [selectedTimeline, setSelectedTimeline] = useState('standard');
  const [selectedStage, setSelectedStage] = useState('ready');

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const timelineMod = TIMELINES.find((t) => t.id === selectedTimeline)?.modifier || 0;
  const stageMod = selectedStage === 'scratch' ? 2 : 0;
  const estimatedDays = Math.max(4, currentType.baseDays + timelineMod + stageMod);

  const handleApplyScope = () => {
    const summary = `${currentType.name} (${selectedTimeline === 'rapid' ? 'Fast-Track' : 'Standard'} timeline, ${selectedStage === 'scratch' ? 'from scratch' : 'content ready'}, est. ~${estimatedDays} days)`;
    if (onSelectScope) {
      onSelectScope(summary);
    }
    const contactEl = document.getElementById('contact-section');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator-section" className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest/90 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded-md bg-tertiary-container/20 text-tertiary w-fit ring-1 ring-tertiary/30">
            <span className="material-symbols-outlined text-[16px]">calculate</span>
            <span className="font-label text-label-sm font-semibold uppercase tracking-wider">Instant Clarity & Control</span>
          </div>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Estimate Your Project Scope & Timeline
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            No gatekept rates or endless sales meetings. Customize your requirements below to see exact deliverables and realistic delivery windows.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Step 1: Project Type */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label text-label-md font-semibold text-on-surface flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-container/30 text-primary flex items-center justify-center text-xs font-bold ring-1 ring-primary/40">1</span>
                What do you want us to engineer?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-space-md rounded-xl text-left transition-all duration-200 flex flex-col gap-1 ring-1 ${
                        isSelected
                          ? 'bg-surface-container-high ring-primary shadow-[0_0_16px_rgba(77,142,255,0.25)]'
                          : 'bg-surface-container/60 ring-outline-variant/20 hover:bg-surface-container hover:ring-outline-variant/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-headline text-sm font-bold ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                          {type.name}
                        </span>
                        {isSelected && (
                          <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        )}
                      </div>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                        {type.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline Preference */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label text-label-md font-semibold text-on-surface flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-container/30 text-primary flex items-center justify-center text-xs font-bold ring-1 ring-primary/40">2</span>
                Choose your ideal timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                {TIMELINES.map((tl) => {
                  const isSelected = selectedTimeline === tl.id;
                  return (
                    <button
                      key={tl.id}
                      type="button"
                      onClick={() => setSelectedTimeline(tl.id)}
                      className={`p-space-sm rounded-xl text-left transition-all duration-200 flex flex-col gap-0.5 ring-1 ${
                        isSelected
                          ? 'bg-surface-container-high ring-secondary shadow-[0_0_16px_rgba(139,92,246,0.25)]'
                          : 'bg-surface-container/60 ring-outline-variant/20 hover:bg-surface-container'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-label text-sm font-semibold ${isSelected ? 'text-secondary' : 'text-on-surface'}`}>
                          {tl.label}
                        </span>
                        {isSelected && (
                          <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                        )}
                      </div>
                      <span className="font-body text-xs text-on-surface-variant">{tl.note}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Current Stage */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label text-label-md font-semibold text-on-surface flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-container/30 text-primary flex items-center justify-center text-xs font-bold ring-1 ring-primary/40">3</span>
                Current status of brand & content
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                {ASSET_STAGES.map((st) => {
                  const isSelected = selectedStage === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedStage(st.id)}
                      className={`p-space-sm rounded-xl text-left transition-all duration-200 flex flex-col gap-0.5 ring-1 ${
                        isSelected
                          ? 'bg-surface-container-high ring-tertiary shadow-[0_0_16px_rgba(76,215,246,0.2)]'
                          : 'bg-surface-container/60 ring-outline-variant/20 hover:bg-surface-container'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-label text-sm font-semibold ${isSelected ? 'text-tertiary' : 'text-on-surface'}`}>
                          {st.label}
                        </span>
                        {isSelected && (
                          <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                        )}
                      </div>
                      <span className="font-body text-xs text-on-surface-variant">{st.note}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Summary Card (5 cols) */}
          <div className="lg:col-span-5 p-space-lg rounded-2xl bg-surface-container-low/90 backdrop-blur-xl ring-1 ring-outline-variant/30 shadow-xl flex flex-col gap-space-md border-gradient-top sticky top-24">
            <div className="flex items-center justify-between border-b border-surface-bright/40 pb-space-xs">
              <div className="flex flex-col">
                <span className="font-label text-xs uppercase tracking-wider text-outline font-semibold">Estimated Delivery Window</span>
                <span className="font-display text-2xl font-extrabold text-on-surface mt-0.5 flex items-baseline gap-1">
                  ~{estimatedDays} Business Days
                  <span className="font-body text-xs font-normal text-tertiary">Guaranteed Sprint</span>
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-tertiary-container/30 text-tertiary flex items-center justify-center ring-1 ring-tertiary/30">
                <span className="material-symbols-outlined text-[22px]">verified</span>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label text-xs uppercase tracking-wider text-primary font-semibold">
                Included in This Milestone:
              </span>
              <ul className="flex flex-col gap-2">
                {currentType.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-xs text-on-surface leading-snug">
                    <span className="material-symbols-outlined text-[16px] text-tertiary shrink-0 mt-0.5">check</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reassurance pills */}
            <div className="p-space-xs rounded-xl bg-surface-container-highest/50 ring-1 ring-outline-variant/20 flex flex-col gap-1 text-[11px] text-on-surface-variant">
              <div className="flex items-center gap-1.5 text-on-surface font-semibold">
                <span className="material-symbols-outlined text-[14px] text-primary">security</span>
                <span>Zero Risk Commitment</span>
              </div>
              <span>No payment until initial design & architecture blueprint is approved by you.</span>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleApplyScope}
              className="btn-primary w-full text-sm py-space-sm shadow-[0_0_24px_rgba(77,142,255,0.4)]"
            >
              <span>Lock In This Scope with Saksham</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </button>
            <p className="text-center font-body text-[11px] text-outline">
              Pre-fills your inquiry below with these exact specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
