import React from 'react';

const GUARANTEES = [
  {
    icon: 'verified_user',
    title: 'Milestone Approval Guarantee',
    highlight: 'Zero financial risk',
    description:
      'You never pay for work you haven’t reviewed and approved. Each phase has a clear milestone checkpoint. If the interactive prototype doesn’t meet your vision, we refine it together before any production code begins.',
    badgeBg: 'bg-primary-container/20 ring-primary/30',
    iconColor: 'text-primary',
    hoverRing: 'hover:ring-primary/40',
  },
  {
    icon: 'lock_open_right',
    title: '100% Code & Asset Ownership',
    highlight: 'No agency hostage traps',
    description:
      'On launch day, full administrative ownership of your GitHub repository, Figma files, DNS records, and deployment keys are transferred directly to your name. No proprietary lock-in, no ongoing agency dependencies.',
    badgeBg: 'bg-secondary-container/25 ring-secondary/30',
    iconColor: 'text-secondary',
    hoverRing: 'hover:ring-secondary/40',
  },
  {
    icon: 'health_and_safety',
    title: '30-Day Post-Launch Hypercare',
    highlight: 'We stand by our craft',
    description:
      'Going live is just the beginning. For 30 days post-launch, we actively monitor your system, resolve any unexpected edge-case bugs, and provide personalized video training for you and your team at zero extra charge.',
    badgeBg: 'bg-tertiary-container/20 ring-tertiary/30',
    iconColor: 'text-tertiary',
    hoverRing: 'hover:ring-tertiary/40',
  },
];

const WhySakhamSection = () => {
  return (
    <section
      id="why-section"
      className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest/40"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-primary">Unmatched Client Safety</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            The SAKSHAM Triple Guarantee
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            Hiring digital talent shouldn't feel like a gamble. We structure our contracts to place all accountability on our shoulders, giving you total peace of mind.
          </p>
        </div>

        {/* 3 Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              className={`p-space-lg rounded-2xl bg-surface-container/90 ring-1 ring-outline-variant/20 ${g.hoverRing} shadow-md flex flex-col justify-between gap-space-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${g.badgeBg} ring-1 flex items-center justify-center ${g.iconColor} shadow-inner`}>
                    <span className="material-symbols-outlined text-[28px]">{g.icon}</span>
                  </div>
                  <span className="font-code text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary ring-1 ring-primary/20 font-semibold">
                    {g.highlight}
                  </span>
                </div>

                <h3 className="font-headline text-headline-sm text-on-surface font-semibold pt-1">
                  {g.title}
                </h3>

                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  {g.description}
                </p>
              </div>

              <div className="pt-space-xs border-t border-surface-bright/20 flex items-center gap-1 text-[11px] text-tertiary font-medium">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                <span>Contractually Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySakhamSection;
