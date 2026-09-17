import React from 'react';
import Card3D from './Card3D';

const WhySakhamSection = () => {
  const guarantees = [
    {
      icon: 'verified_user',
      title: 'Milestone-based billing',
      description: 'You approve each phase before any payment is triggered. No surprise invoices.',
      accent: '#E58E26',
    },
    {
      icon: 'lock_open_right',
      title: '100% code ownership',
      description: 'Full repository, design files, and deployment access transferred to you on day one.',
      accent: '#4cd7f6',
    },
    {
      icon: 'health_and_safety',
      title: '30-day post-launch care',
      description: 'We monitor, patch bugs, and answer questions for a full month after going live.',
      accent: '#10b981',
    },
  ];

  return (
    <section className="w-full py-24 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#121316] border-b border-[#2A2D35]">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-16 animate-on-scroll">
        <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// GUARANTEES</span>
        <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
          Built-in guarantees
        </h2>
        <p className="text-lg text-[#8A919E] max-w-2xl mt-4">
          We strip away the risk of working with external partners by embedding trust and accountability into our core offering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {guarantees.map((item, idx) => (
          <Card3D
            key={item.title}
            maxTilt={7}
            glare={true}
            scale={1.03}
            borderGlow={true}
            glowColor={`${item.accent}80`}
            className="animate-on-scroll"
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            <div className="group h-full bg-[#1A1C21] border border-[#2A2D35] hover:border-transparent rounded-xl p-8 flex flex-col transition-all duration-500 relative overflow-hidden">
              {/* Ambient corner glow */}
              <div
                className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: `${item.accent}15` }}
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-lg"
                style={{
                  backgroundColor: `${item.accent}12`,
                }}
              >
                <span
                  className="material-symbols-outlined text-[28px] transition-all duration-500 group-hover:scale-110"
                  style={{ color: item.accent }}
                >
                  {item.icon}
                </span>
                {/* Icon glow ring */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `0 0 20px ${item.accent}25, inset 0 0 20px ${item.accent}08` }}
                />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3] group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="relative text-sm text-[#8A919E] mt-3 leading-relaxed group-hover:text-[#a0a7b3] transition-colors">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-auto pt-6">
                <div
                  className="h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ backgroundColor: `${item.accent}40` }}
                />
              </div>
            </div>
          </Card3D>
        ))}
      </div>
    </section>
  );
};

export default WhySakhamSection;
