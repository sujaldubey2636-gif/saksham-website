import React from 'react';

const ProcessTimelineSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'We map your goals, audience, and technical requirements in a focused 60-minute session.',
    },
    {
      num: '02',
      title: 'Prototype',
      description: 'A working interactive preview lands in your inbox within 3-5 days for real feedback.',
    },
    {
      num: '03',
      title: 'Build',
      description: 'Production-grade code with integrations, tested across all devices and optimized for speed.',
    },
    {
      num: '04',
      title: 'Launch & Support',
      description: 'We deploy, transfer full ownership, and provide 30 days of dedicated support.',
    },
  ];

  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-16">
        <span className="section-label text-primary uppercase tracking-widest text-sm font-semibold">How we work</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-on-surface">
          A clear, proven process
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mt-4">
          No vague timelines. No endless meetings. Just a straightforward path from idea to production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col">
            <span className="text-4xl font-display font-bold text-outline-variant/50 mb-4">
              {step.num}
            </span>
            <h3 className="text-lg font-headline font-semibold text-on-surface">
              {step.title}
            </h3>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
