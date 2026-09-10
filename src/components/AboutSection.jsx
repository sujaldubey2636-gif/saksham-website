import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-section" className="py-24 lg:py-32 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNBnzRRm14HJs1Jhvu2lrmgNnpLNNNKh0zBqLhks2Fnik8g5IMV87uUnKGtLAULFigToWtn1GPJVmEx3205EObizEwC7d0vbpSuC6hrtSnBhWCPbmv3kF7rbvUASLx2vJ4pUQb_KUy3TZFu4UJXCT8p3CFSjw-Iskpi8AyG2wji8EmDsThRrpQzLdoRCVoJ6BzR-xDH7TTir7gDA4ffwRpZGHLHs6PypnxCojv9nqaBoKgKrJpzTb"
            alt="Saksham Sharma"
            className="w-full aspect-square object-cover rounded-xl"
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <span className="section-label text-on-surface-variant text-sm font-semibold tracking-wider uppercase">About</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-on-surface mt-2">
            Meet the founder
          </h2>
          
          <div className="mt-4 flex flex-col">
            <span className="text-sm font-medium text-primary">Saksham Sharma</span>
            <span className="text-sm text-on-surface-variant">Founder & Lead Engineer</span>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <p className="text-base text-on-surface-variant leading-relaxed">
              <span className="font-bold text-on-surface">Saksham</span> means{' '}
              <span className="italic text-on-surface">capable</span> in Sanskrit. We started this studio
              because small and mid-sized businesses deserve the exact same enterprise-grade digital tools, lightning-fast
              sites, and automated operations that huge corporations rely on — without the bloated agency price tag,
              bureaucracy, or endless check-in calls.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed">
              We treat client ventures with genuine care, authentic craftsmanship, and a relentless focus on getting things
              done right the first time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
