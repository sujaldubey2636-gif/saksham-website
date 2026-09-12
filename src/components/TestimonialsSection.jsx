import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Working with Team SAKSHAM was refreshingly straightforward. Our booking site launched in 12 days and appointments jumped 140% in the first month.',
      name: 'Dr. Ananya Sen',
      role: 'Founder, Aura Studio',
      avatar: 'https://images.unsplash.com/photo-1594824813636-1e64177d13b2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: 'Two agencies quoted us $25k and months of work. Saksham delivered our automation pipeline in 9 days. It saves us 14 hours every week.',
      name: 'Marcus Vance',
      role: 'Operations, Apex Freight',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: 'No games, no hidden fees. We got our complete codebase on day one. The 30-day support after launch was genuinely helpful.',
      name: 'Rhea Kapoor',
      role: 'Growth Lead, Pulse Coffee',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="w-full py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-[#121316] border-b border-[#2A2D35]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#E58E26] uppercase tracking-widest font-semibold">// CLIENT SIGNALS</span>
          <h2 className="text-4xl md:text-5xl font-['Bricolage_Grotesque',sans-serif] font-bold tracking-tight text-[#F0F1F3]">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#1A1C21] rounded-xl p-8 border border-[#2A2D35] flex flex-col justify-between"
            >
              <p className="text-base text-[#F0F1F3] leading-relaxed italic">
                "{t.quote}"
              </p>
              
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#F0F1F3]">
                    {t.name}
                  </span>
                  <span className="text-xs text-[#8A919E]">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
