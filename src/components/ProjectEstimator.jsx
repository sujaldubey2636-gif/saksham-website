import React, { useState } from 'react';

const ProjectEstimator = ({ onSelectScope }) => {
  const [projectType, setProjectType] = useState('High-Converting Website');
  const [timeline, setTimeline] = useState('Standard (14 days)');
  const [startingPoint, setStartingPoint] = useState('Content ready');

  const types = [
    { title: 'High-Converting Website', desc: 'Bespoke marketing site built for sub-second speed & conversions' },
    { title: 'Custom Web App & Portal', desc: 'Client dashboard, booking flow, or interactive platform' },
    { title: 'Workflow & API Automation', desc: 'Connect CRMs, payment webhooks, and eliminate manual busywork' },
    { title: 'Full Digital Overhaul', desc: 'Complete rebuild: design, backend integrations, and SEO strategy' }
  ];

  const timelines = [
    { title: 'Standard (14 days)', desc: 'Thoroughly tested, regular paced development sprint' },
    { title: 'Fast-track (7 days)', desc: 'Hyper-focused dedicated sprint for urgent launches' }
  ];

  const points = [
    { title: 'Content ready', desc: 'You have brand assets and copywriting prepared' },
    { title: 'Starting from scratch', desc: 'I will write copy, structure brand tone, and build assets' }
  ];

  const scopeSummary = `${projectType} [${timeline}, ${startingPoint}]`;

  const handleGetStarted = () => {
    if (onSelectScope) {
      onSelectScope(scopeSummary);
    }
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Saksham, I just estimated my project on your website:\n\n` +
    `• Type: ${projectType}\n` +
    `• Timeline: ${timeline}\n` +
    `• Status: ${startingPoint}\n\n` +
    `Can we discuss feasibility and next steps?`
  );

  return (
    <section id="estimator-section" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-[#E58E26] mb-3">
          <span>// INSTANT CLARITY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F0F1F3] font-['Bricolage_Grotesque',sans-serif]">
          Estimate your scope and timeline.
        </h2>
        <p className="text-base text-[#8A919E] max-w-2xl mt-3 font-['IBM_Plex_Sans',sans-serif]">
          Select your requirements below to calculate deliverables, sprint turnaround, and handoff terms in real time.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8 font-['IBM_Plex_Sans',sans-serif]">
            {/* Group 1 */}
            <div>
              <label className="text-xs font-mono text-[#F0F1F3] mb-3 block">
                1. SELECT PROJECT SPECIFICATION
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {types.map((type) => (
                  <button
                    key={type.title}
                    type="button"
                    onClick={() => setProjectType(type.title)}
                    className={`text-left rounded-lg p-4 border transition-colors ${
                      projectType === type.title
                        ? 'border-[#E58E26] bg-[#1A1C21]'
                        : 'border-[#2A2D35] bg-[#16181D] hover:border-[#8A919E]'
                    }`}
                  >
                    <div className="text-sm font-semibold text-[#F0F1F3]">{type.title}</div>
                    <div className="text-xs text-[#8A919E] mt-1 leading-relaxed">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Group 2 */}
            <div>
              <label className="text-xs font-mono text-[#F0F1F3] mb-3 block">
                2. DESIRED DELIVERY PACE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {timelines.map((t) => (
                  <button
                    key={t.title}
                    type="button"
                    onClick={() => setTimeline(t.title)}
                    className={`text-left rounded-lg p-4 border transition-colors ${
                      timeline === t.title
                        ? 'border-[#E58E26] bg-[#1A1C21]'
                        : 'border-[#2A2D35] bg-[#16181D] hover:border-[#8A919E]'
                    }`}
                  >
                    <div className="text-sm font-semibold text-[#F0F1F3]">{t.title}</div>
                    <div className="text-xs text-[#8A919E] mt-1 leading-relaxed">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Group 3 */}
            <div>
              <label className="text-xs font-mono text-[#F0F1F3] mb-3 block">
                3. STARTING MATERIAL
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {points.map((p) => (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => setStartingPoint(p.title)}
                    className={`text-left rounded-lg p-4 border transition-colors ${
                      startingPoint === p.title
                        ? 'border-[#E58E26] bg-[#1A1C21]'
                        : 'border-[#2A2D35] bg-[#16181D] hover:border-[#8A919E]'
                    }`}
                  >
                    <div className="text-sm font-semibold text-[#F0F1F3]">{p.title}</div>
                    <div className="text-xs text-[#8A919E] mt-1 leading-relaxed">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#1A1C21] rounded-lg p-6 sm:p-8 border border-[#2A2D35] shadow-2xl font-mono">
              <div className="flex items-center justify-between border-b border-[#2A2D35] pb-4">
                <div>
                  <span className="text-xs text-[#8A919E]">ESTIMATED SPRINT</span>
                  <div className="text-3xl font-bold text-[#F0F1F3] mt-1">
                    {timeline === 'Standard (14 days)' ? '~14 Days' : '~7 Days'}
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#276375]/20 text-[#4cd7f6] border border-[#276375]/40 text-xs">
                  Guaranteed
                </div>
              </div>
              
              <div className="py-6 border-b border-[#2A2D35] space-y-3 font-['IBM_Plex_Sans',sans-serif] text-xs">
                <div className="text-xs font-mono text-[#8A919E] mb-2">INCLUDED DELIVERABLES:</div>
                <div className="flex items-start gap-2.5 text-[#F0F1F3]">
                  <span className="text-emerald-400 font-bold">&#10003;</span>
                  <span>{projectType} Architecture &amp; Production Code</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F0F1F3]">
                  <span className="text-emerald-400 font-bold">&#10003;</span>
                  <span>Sub-second 99+ PageSpeed Mobile Optimization</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F0F1F3]">
                  <span className="text-emerald-400 font-bold">&#10003;</span>
                  <span>{startingPoint === 'Content ready' ? 'Implementation of provided assets' : 'Technical copywriting & design direction'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F0F1F3]">
                  <span className="text-emerald-400 font-bold">&#10003;</span>
                  <span>100% Repository Transfer to your GitHub</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F0F1F3]">
                  <span className="text-emerald-400 font-bold">&#10003;</span>
                  <span>30 Days Post-Launch Dedicated Hypercare</span>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="btn-primary w-full py-3 text-sm tracking-tight text-center"
                >
                  Lock In This Scope With Saksham &rarr;
                </button>

                <a
                  href={`https://wa.me/919867781756?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full py-3 text-xs flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-emerald-400 text-[16px]">chat</span>
                  <span>Send This Scope on WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 text-[11px] text-[#8A919E] text-center">
                Pre-fills your inquiry directly with these parameters.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
