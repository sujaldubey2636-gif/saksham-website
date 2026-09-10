import React from 'react';

const STEPS = [
  {
    step: '01',
    phase: 'Days 1–2',
    title: 'Blueprint & Architecture Scope',
    subtitle: 'Zero guesswork kickoff',
    description:
      'We conduct a focused discovery session to map your conversion bottlenecks, wireframe your customer flow, and lock in a fixed milestone agreement.',
    deliverable: 'Interactive Figma wireframe & fixed scope contract',
    icon: 'architecture',
    iconColor: 'text-primary',
    bgBadge: 'bg-primary-container/20 ring-primary/30',
  },
  {
    step: '02',
    phase: 'Days 3–5',
    title: 'Clickable Interactive Prototype',
    subtitle: 'See & feel it before production',
    description:
      'We build the responsive interactive visual system. You click through actual user flows, test on your mobile device, and request iterations in real time.',
    deliverable: 'Clickable high-fidelity preview approved by you',
    icon: 'touch_app',
    iconColor: 'text-secondary',
    bgBadge: 'bg-secondary-container/20 ring-secondary/30',
  },
  {
    step: '03',
    phase: 'Days 6–10',
    title: 'Production Engineering & Integrations',
    subtitle: 'Clean code & automated pipelines',
    description:
      'We write production-grade React/Next.js code, configure CRM and payment webhooks, test across all screen sizes, and verify sub-second 99+ PageSpeed scores.',
    deliverable: 'Tested codebase + working API integrations',
    icon: 'terminal',
    iconColor: 'text-tertiary',
    bgBadge: 'bg-tertiary-container/20 ring-tertiary/30',
  },
  {
    step: '04',
    phase: 'Days 11–14',
    title: 'Handoff, Launch & 30-Day Hypercare',
    subtitle: 'Total ownership & post-launch peace of mind',
    description:
      'We execute domain DNS launch, transfer 100% repository & asset ownership to your name, record custom Loom video guides, and provide 30 days of free priority support.',
    deliverable: 'Live URL + complete code transfer + video training',
    icon: 'rocket_launch',
    iconColor: 'text-primary',
    bgBadge: 'bg-primary-container/20 ring-primary/30',
  },
];

const ProcessTimelineSection = () => {
  return (
    <section id="process-section" className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest/50">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-tertiary">Predictable Roadmap</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            How We Take You from Idea to Live in 14 Days
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            No endless meetings or opaque waiting periods. Every sprint follows a proven, transparent checklist with milestone checkpoints you approve every step of the way.
          </p>
        </div>

        {/* Timeline Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
          {STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-space-lg rounded-2xl bg-surface-container/80 backdrop-blur-md ring-1 ring-outline-variant/20 hover:ring-primary/40 transition-all duration-300 flex flex-col justify-between gap-space-md shadow-md hover:-translate-y-1"
            >
              {/* Step number & Icon header */}
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl ${item.bgBadge} ring-1 flex items-center justify-center ${item.iconColor} shadow-inner`}>
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-code text-xs px-2 py-0.5 rounded-full bg-surface-container-high text-outline-variant font-bold">
                    Phase {item.step}
                  </span>
                  <span className="font-label text-xs font-semibold text-primary">
                    {item.phase}
                  </span>
                </div>
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-headline text-headline-sm text-on-surface font-semibold leading-tight">
                  {item.title}
                </h3>
                <span className="font-body text-xs text-primary font-medium">
                  {item.subtitle}
                </span>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>

              {/* Checkpoint Deliverable Badge */}
              <div className="pt-space-xs border-t border-surface-bright/30 flex items-start gap-1.5 text-[11px] text-tertiary">
                <span className="material-symbols-outlined text-[15px] shrink-0 mt-0.5">verified</span>
                <span><strong>Milestone:</strong> {item.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
