import React, { useState } from 'react';

const ProjectEstimator = ({ onSelectScope }) => {
  const [projectType, setProjectType] = useState('High-Converting Website');
  const [timeline, setTimeline] = useState('Standard (14 days)');
  const [startingPoint, setStartingPoint] = useState('Content ready');

  const types = [
    { title: 'High-Converting Website', desc: 'Marketing site built for speed and conversions' },
    { title: 'Custom Web App', desc: 'Complex portal or platform with user authentication' },
    { title: 'Workflow Automation', desc: 'Connect internal tools and automate business tasks' },
    { title: 'Full Digital Overhaul', desc: 'End-to-end strategy, development, and marketing' }
  ];

  const timelines = [
    { title: 'Standard (14 days)', desc: 'Regular paced development cycle' },
    { title: 'Fast-track (7 days)', desc: 'Prioritized delivery for tight deadlines' }
  ];

  const points = [
    { title: 'Content ready', desc: 'You have copy and assets prepared' },
    { title: 'Starting from scratch', desc: 'Need help with copywriting and strategy' }
  ];

  const handleGetStarted = () => {
    if (onSelectScope) {
      onSelectScope(`${projectType} | ${timeline} | ${startingPoint}`);
    }
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="estimator-section" className="py-24 lg:py-32 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-7xl mx-auto">
        <span className="section-label text-primary text-sm font-semibold tracking-wider uppercase">Scope calculator</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-on-surface mt-2">Estimate your project</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mt-4">
          Select your requirements below to see an instant estimation of delivery time and deliverables.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left Side */}
          <div className="flex flex-col gap-8">
            {/* Group 1 */}
            <div>
              <h3 className="text-sm font-medium text-on-surface mb-3">Project type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {types.map((type) => (
                  <button
                    key={type.title}
                    onClick={() => setProjectType(type.title)}
                    className={`text-left rounded-lg p-4 border transition-colors ${
                      projectType === type.title
                        ? 'border-primary/50 bg-surface-container-high'
                        : 'border-outline-variant/30 hover:border-outline-variant/60'
                    }`}
                  >
                    <div className="text-sm font-medium text-on-surface">{type.title}</div>
                    <div className="text-xs text-on-surface-variant mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Group 2 */}
            <div>
              <h3 className="text-sm font-medium text-on-surface mb-3">Timeline</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {timelines.map((t) => (
                  <button
                    key={t.title}
                    onClick={() => setTimeline(t.title)}
                    className={`text-left rounded-lg p-4 border transition-colors ${
                      timeline === t.title
                        ? 'border-primary/50 bg-surface-container-high'
                        : 'border-outline-variant/30 hover:border-outline-variant/60'
                    }`}
                  >
                    <div className="text-sm font-medium text-on-surface">{t.title}</div>
                    <div className="text-xs text-on-surface-variant mt-1">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Group 3 */}
            <div>
              <h3 className="text-sm font-medium text-on-surface mb-3">Starting point</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((p) => (
                  <button
                    key={p.title}
                    onClick={() => setStartingPoint(p.title)}
                    className={`text-left rounded-lg p-4 border transition-colors ${
                      startingPoint === p.title
                        ? 'border-primary/50 bg-surface-container-high'
                        : 'border-outline-variant/30 hover:border-outline-variant/60'
                    }`}
                  >
                    <div className="text-sm font-medium text-on-surface">{p.title}</div>
                    <div className="text-xs text-on-surface-variant mt-1">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/20 sticky top-24">
              <h3 className="text-sm font-medium text-on-surface-variant mb-2">Estimated delivery</h3>
              <div className="text-3xl font-display font-bold text-on-surface mb-8">
                {timeline === 'Standard (14 days)' ? '14 Days' : '7 Days'}
              </div>
              
              <div className="mb-8">
                <h4 className="text-sm font-medium text-on-surface mb-4">What's included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span>
                    <span className="text-sm text-on-surface-variant">{projectType} Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span>
                    <span className="text-sm text-on-surface-variant">{timeline} dedicated sprint</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span>
                    <span className="text-sm text-on-surface-variant">
                      {startingPoint === 'Content ready' ? 'Implementation of provided content' : 'Copywriting and strategic guidance'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span>
                    <span className="text-sm text-on-surface-variant">Performance optimization & SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span>
                    <span className="text-sm text-on-surface-variant">30 days post-launch support</span>
                  </li>
                </ul>
              </div>

              <button onClick={handleGetStarted} className="btn-primary w-full py-3 rounded-lg bg-primary text-surface font-semibold hover:bg-primary/90 transition-colors">
                Get started with this scope
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
