import React from 'react';

const METRICS = [
  { label: 'On-Time Sprint Record', value: '100%', detail: 'Zero missed milestone deadlines' },
  { label: 'Average Mobile PageSpeed', value: '99/100', detail: 'Sub-second load times verified' },
  { label: 'Weekly Hours Automated', value: '14+ hrs', detail: 'Per client operation flow' },
  { label: 'Code & IP Ownership', value: '100%', detail: 'Full GitHub transfer on launch day' },
];

const TESTIMONIALS = [
  {
    name: 'Dr. Ananya Sen',
    role: 'Founder & Clinical Director',
    company: 'Aura Studio Wellness',
    outcome: '+142% Appointment Bookings',
    quote:
      'We were bleeding patient inquiries because our old WordPress site was sluggish and required manual calendar back-and-forth. Saksham engineered a tailored booking engine with instant SMS triggers. Our booked consultations jumped 142% in the very first month, with zero booking glitches.',
    avatar: 'https://images.unsplash.com/photo-1594824813636-1e64177d13b2?auto=format&fit=crop&w=150&q=80',
    tags: ['Next.js', 'Cal.com API', 'SMS Triggers'],
  },
  {
    name: 'Marcus Vance',
    role: 'Operations Director',
    company: 'Apex Freight Solutions',
    outcome: '14 Hours Saved Every Week',
    quote:
      'Two traditional agencies quoted us $25,000 and 4 months to automate our dispatching workflow. Team SAKSHAM understood our bottlenecks on day one and delivered a complete Airtable + Make webhook pipeline in 9 days flat. It effortlessly routes 50+ daily orders with zero manual re-entry.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    tags: ['Airtable', 'Make Webhooks', 'Automated PDF Invoices'],
  },
  {
    name: 'Rhea Kapoor',
    role: 'Head of Growth',
    company: 'Pulse Coffee Roasters',
    outcome: '32% Repeat Subscription Ratio',
    quote:
      'The biggest psychological relief was the complete lack of agency games. No surprise invoices, no held-hostage files. Saksham handed over our full GitHub repository, taught our team via personalized Loom videos, and stood by us through our high-volume launch weekend with zero downtime.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    tags: ['Shopify Custom', 'Klaviyo Flows', 'Zero Vendor Lock-In'],
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest/70">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm p-space-md rounded-2xl bg-surface-container/60 ring-1 ring-outline-variant/20 shadow-lg border-gradient-top">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center sm:items-start p-space-xs text-center sm:text-left">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                {m.value}
              </span>
              <span className="font-headline text-xs font-semibold text-on-surface mt-1">
                {m.label}
              </span>
              <span className="font-body text-[11px] text-outline">
                {m.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-primary">Proven Client Outcomes</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Real Results from Genuine Partnerships
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            We don't measure success by fancy vanity design awards. We measure it by hours saved, conversions increased, and business clarity gained.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-space-lg rounded-2xl bg-surface-container/90 ring-1 ring-outline-variant/20 hover:ring-primary/30 transition-all duration-300 flex flex-col justify-between gap-space-md shadow-md"
            >
              {/* Stars + Outcome Tag */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <div className="flex text-tertiary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary-container/20 px-2 py-0.5 rounded-full ring-1 ring-primary/30">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    <span>Verified Client</span>
                  </div>
                </div>

                {/* Measurable Outcome Callout */}
                <div className="p-space-xs rounded-lg bg-surface-container-lowest ring-1 ring-outline-variant/20 font-label text-xs font-bold text-tertiary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span>{t.outcome}</span>
                </div>

                {/* Quote */}
                <p className="font-body text-xs text-on-surface leading-relaxed italic mt-1">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Tech Tags */}
              <div className="pt-space-xs border-t border-surface-bright/30 flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-outline/30"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="font-headline text-xs font-bold text-on-surface">{t.name}</span>
                    <span className="font-body text-[11px] text-on-surface-variant">{t.role}</span>
                    <span className="font-body text-[10px] text-outline font-medium">{t.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {t.tags.map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 rounded bg-surface-container-high text-[10px] font-code text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
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
