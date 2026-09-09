import React from 'react';

const FEATURES = [
  {
    icon: 'timer',
    title: 'Rapid Turnaround',
    description: 'Lean, hyper-focused sprints getting your digital platform or automated workflow fully live in days, not endless quarters.',
    iconBg:   'bg-tertiary-container/20',
    iconColor: 'text-tertiary',
    iconRing: 'ring-tertiary/30',
    hoverRing: 'hover:ring-tertiary/30',
  },
  {
    icon: 'connect_without_contact',
    title: 'Direct Founder Access',
    description: 'Communicate 1-on-1 with the creators and software architects building your product. No game of telephone with middlemen.',
    iconBg:   'bg-primary-container/20',
    iconColor: 'text-primary',
    iconRing: 'ring-primary/30',
    hoverRing: 'hover:ring-primary/30',
  },
  {
    icon: 'terminal',
    title: 'Transparent Process',
    description: 'Clear fixed scopes, crystal milestones, and transparent Notion and Figma boards showing granular progress at every checkpoint.',
    iconBg:   'bg-secondary-container/25',
    iconColor: 'text-secondary',
    iconRing: 'ring-secondary/30',
    hoverRing: 'hover:ring-secondary/30',
  },
  {
    icon: 'price_check',
    title: 'Built for Small Businesses',
    description: 'Transparent, fair tier pricing tailored for emerging ventures looking for tangible business ROI without artificial markups.',
    iconBg:   'bg-surface-bright/40',
    iconColor: 'text-tertiary-fixed-dim',
    iconRing: 'ring-tertiary-fixed-dim/30',
    hoverRing: 'hover:ring-tertiary/30',
  },
];

const WhySakhamSection = () => {
  return (
    <section
      id="why-section"
      className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-primary">The Saksham Difference</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Honest Execution. Zero Fluff.
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            Engineered explicitly for growing teams who demand agility and accountability, never bureaucratic agency drag.
          </p>
        </div>

        {/* Feature Grid: 1 col → 2 col → 2 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`p-space-md rounded-xl bg-surface-container-low shadow-sm ring-1 ring-outline-variant/20 ${feature.hoverRing} flex items-start gap-space-md transition-all duration-300`}
            >
              <div className={`w-11 h-11 rounded-xl ${feature.iconBg} ring-1 ${feature.iconRing} flex items-center justify-center ${feature.iconColor} flex-shrink-0 shadow-sm`}>
                <span className="material-symbols-outlined text-[24px]">{feature.icon}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-headline text-headline-sm text-on-surface font-semibold">{feature.title}</h4>
                <p className="font-body text-body-sm text-on-surface-variant mt-space-2xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySakhamSection;
