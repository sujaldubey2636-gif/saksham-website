import React from 'react';
import Card3D from './Card3D';

const ProcessTimelineSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'We map your goals, audience, and technical requirements in a focused 60-minute session.',
      accent: '#E58E26'
    },
    {
      num: '02',
      title: 'Prototype',
      description: 'A working interactive preview lands in your inbox within 3-5 days for real feedback.',
      accent: '#4cd7f6'
    },
    {
      num: '03',
      title: 'Build',
      description: 'Production-grade code with integrations, tested across all devices and optimized for speed.',
      accent: '#10b981'
    },
    {
      num: '04',
      title: 'Launch & Support',
      description: 'We deploy, transfer full ownership, and provide 30 days of dedicated support.',
      accent: '#F0F1F3'
    },
  ];

  return (
    <section id="process-section" className="scroll-mt-24 w-full py-24 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#121316] border-b border-[#2A2D35]">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-16 animate-on-scroll">
        <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// HOW WE OPERATE</span>
        <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
          A clear, proven process
        </h2>
        <p className="text-lg text-[#8A919E] max-w-2xl mt-4">
          No vague timelines. No endless meetings. Just a straightforward path from idea to production.
        </p>
      </div>

      <div className="relative">
        {/* Desktop Connection Line */}
        <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#2A2D35] via-[#E58E26]/50 to-[#2A2D35] opacity-50 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Card3D
              key={step.num}
              maxTilt={8}
              glare={true}
              scale={1.03}
              borderGlow={true}
              glowColor={`${step.accent}80`}
              className="animate-on-scroll z-10"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="group h-full bg-[#1A1C21] border border-[#2A2D35] hover:border-transparent rounded-xl p-8 flex flex-col transition-all duration-500 relative overflow-hidden">
                
                {/* Number Watermark / Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    {/* Glowing dot on the timeline line (Desktop) */}
                    <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#121316] border border-[#2A2D35] group-hover:border-transparent transition-colors duration-500 z-20">
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ backgroundColor: step.accent, boxShadow: `0 0 10px ${step.accent}` }}
                      />
                    </div>
                    
                    {/* Large Animated Number */}
                    <span 
                      className="text-5xl font-['Bricolage_Grotesque',sans-serif] font-black text-[#2A2D35] group-hover:text-transparent transition-all duration-500 block transform group-hover:-translate-y-1"
                      style={{ 
                        WebkitTextStroke: '1px #2A2D35',
                        backgroundClip: 'text',
                        backgroundImage: `linear-gradient(to bottom right, ${step.accent}, ${step.accent}40)`
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3] group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#8A919E] mt-3 leading-relaxed group-hover:text-[#a0a7b3] transition-colors">
                  {step.description}
                </p>

                {/* Bottom Highlight Line */}
                <div className="mt-8 pt-4">
                  <div 
                    className="h-1 w-8 rounded-full opacity-30 group-hover:w-full group-hover:opacity-100 transition-all duration-700 ease-out"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>
                
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
