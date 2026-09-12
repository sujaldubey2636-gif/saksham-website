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
    <section id="process-section" className="w-full py-24 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#121316] border-b border-[#2A2D35]">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-16">
        <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// HOW WE OPERATE</span>
        <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
          A clear, proven process
        </h2>
        <p className="text-lg text-[#8A919E] max-w-2xl mt-4">
          No vague timelines. No endless meetings. Just a straightforward path from idea to production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col">
            <span className="text-4xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#2A2D35] mb-4">
              {step.num}
            </span>
            <h3 className="text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">
              {step.title}
            </h3>
            <p className="text-sm text-[#8A919E] mt-2 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
