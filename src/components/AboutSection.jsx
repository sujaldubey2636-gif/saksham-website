import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-primary">Meet the Builder</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Capable Execution from Day One
          </h2>
        </div>

        {/* Founder Card */}
        <div className="p-space-lg rounded-xl bg-surface-container-low shadow-lg border-gradient-top max-w-2xl flex flex-col gap-space-md">
          {/* Avatar + Info */}
          <div className="flex items-center gap-space-md">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-surface-container-high ring-2 ring-primary/20">
              <img
                alt="Saksham Sharma"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNBnzRRm14HJs1Jhvu2lrmgNnpLNNNKh0zBqLhks2Fnik8g5IMV87uUnKGtLAULFigToWtn1GPJVmEx3205EObizEwC7d0vbpSuC6hrtSnBhWCPbmv3kF7rbvUASLx2vJ4pUQb_KUy3TZFu4UJXCT8p3CFSjw-Iskpi8AyG2wji8EmDsThRrpQzLdoRCVoJ6BzR-xDH7TTir7gDA4ffwRpZGHLHs6PypnxCojv9nqaBoKgKrJpzTb"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline text-headline-sm font-bold text-on-surface">Saksham Sharma</h3>
              <span className="font-label text-label-md text-primary font-medium">Founder & Lead Engineer</span>
              <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-tertiary">code</span>
                <span className="font-label text-label-sm">10+ Years Building Digital Systems</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-surface-bright/30" />

          {/* Bio */}
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            <span className="font-bold text-on-surface">Saksham</span> means{' '}
            <span className="italic text-primary font-medium">capable</span> in Sanskrit. We started this studio
            because small and mid-sized businesses deserve the exact same enterprise-grade digital tools, lightning-fast
            sites, and automated operations that huge corporations rely on — without the bloated agency price tag,
            bureaucracy, or endless check-in calls.
          </p>

          <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
            We treat client ventures with genuine care, authentic craftsmanship, and a relentless focus on getting things
            done right the first time.
          </p>

          {/* Value Pills */}
          <div className="flex flex-wrap gap-space-xs">
            {[
              { label: 'TypeScript & React', color: 'text-tertiary' },
              { label: 'API Integrations',   color: 'text-secondary' },
              { label: 'Performance SEO',    color: 'text-primary' },
            ].map((pill) => (
              <span
                key={pill.label}
                className={`px-space-xs py-1 rounded-full bg-surface-container ${pill.color} font-label text-label-sm`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
