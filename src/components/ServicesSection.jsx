import React from 'react';
import Card3D from './Card3D';

export default function ServicesSection() {
  const services = [
    {
      icon: 'code_blocks',
      title: 'Web Development',
      desc: 'We design and build fast, responsive websites that convert visitors into customers. React, Next.js, and modern CMS platforms.',
      tags: 'React · Next.js · CMS',
    },
    {
      icon: 'campaign',
      title: 'Digital Marketing',
      desc: 'Data-driven acquisition strategies, technical SEO, and retention flows that compound your revenue over time.',
      tags: 'SEO · Paid Ads · Email',
    },
    {
      icon: 'hub',
      title: 'Automation',
      desc: 'We connect your tools and eliminate manual work with custom API integrations, CRM sync, and workflow automation.',
      tags: 'Make · Zapier · APIs',
    },
  ];

  return (
    <section id="services-section" className="scroll-mt-24 py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 animate-on-scroll">
          <span className="text-xs font-mono text-[#E58E26] uppercase tracking-wider mb-4 block">
            // WHAT WE BUILD
          </span>
          <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold text-[#F0F1F3] tracking-tight">
            Capabilities.
          </h2>
          <p className="text-lg text-[#8A919E] max-w-2xl mt-4">
            We offer comprehensive solutions to help your business grow online and streamline operations.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-on-scroll delay-100">
          {services.map((s, idx) => (
            <Card3D key={idx} maxTilt={8} glare={true} scale={1.02} className="h-full">
              <article className="h-full bg-[#1A1C21] border border-[#2A2D35] rounded-xl p-8 flex flex-col justify-between hover:border-[#E58E26]/40 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#24272e] text-[#E58E26] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <h3 className="text-xl font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">
                    {s.title}
                  </h3>
                  <p className="text-base text-[#8A919E] mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#2A2D35] text-xs font-mono text-[#8A919E]">
                  {s.tags}
                </div>
              </article>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
