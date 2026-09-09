import React from 'react';

const SERVICES = [
  {
    icon: 'code_blocks',
    badge: 'Web Eng',
    title: 'Website Development',
    description:
      'Modern, lightning-fast responsive web applications with precision mobile-first UX, custom CMS architecture, and frictionless conversion paths.',
    tags: [
      { label: 'Next.js & Astro',  color: 'text-primary',           ring: 'ring-primary/20' },
      { label: 'Headless CMS',     color: 'text-on-surface-variant', ring: 'ring-outline-variant/30' },
      { label: '99+ PageSpeed',    color: 'text-tertiary',           ring: 'ring-tertiary/20' },
    ],
    cta: 'Explore Engine',
    accentBg:   'bg-primary-container/20',
    accentIcon: 'text-primary',
    accentRing: 'ring-primary/30',
    glowColor:  'bg-primary/10 group-hover:bg-primary/20',
    hoverRing:  'hover:ring-primary/40',
    badgeColor: 'text-primary bg-primary/10 ring-primary/20',
    ctaColor:   'text-primary',
  },
  {
    icon: 'insights',
    badge: 'Growth',
    title: 'Digital Marketing',
    description:
      'High-ROI targeted customer acquisition pipelines, organic technical SEO fundamentals, and structured retention email flows designed to compound revenue.',
    tags: [
      { label: 'Meta & Google Ads',  color: 'text-secondary',          ring: 'ring-secondary/20' },
      { label: 'Technical SEO',      color: 'text-on-surface-variant', ring: 'ring-outline-variant/30' },
      { label: 'Klaviyo Retention',  color: 'text-primary',            ring: 'ring-primary/20' },
    ],
    cta: 'Explore Strategy',
    accentBg:   'bg-secondary-container/30',
    accentIcon: 'text-secondary',
    accentRing: 'ring-secondary/30',
    glowColor:  'bg-secondary/15 group-hover:bg-secondary/25',
    hoverRing:  'hover:ring-secondary/40',
    badgeColor: 'text-secondary bg-secondary/10 ring-secondary/20',
    ctaColor:   'text-secondary',
  },
  {
    icon: 'hub',
    badge: 'Automation',
    title: 'Automation & Workflows',
    description:
      'Eliminate repetitive manual tasks. We engineer automated intake funnels, CRM synchronizations, and custom API pipelines using Make and Zapier.',
    tags: [
      { label: 'Make & Zapier',  color: 'text-tertiary',           ring: 'ring-tertiary/20' },
      { label: 'CRM Sync',       color: 'text-on-surface-variant', ring: 'ring-outline-variant/30' },
      { label: 'Custom Webhooks',color: 'text-secondary',          ring: 'ring-secondary/20' },
    ],
    cta: 'Explore Workflows',
    accentBg:   'bg-tertiary-container/30',
    accentIcon: 'text-tertiary',
    accentRing: 'ring-tertiary/30',
    glowColor:  'bg-tertiary/10 group-hover:bg-tertiary/20',
    hoverRing:  'hover:ring-tertiary/40',
    badgeColor: 'text-tertiary bg-tertiary/10 ring-tertiary/20',
    ctaColor:   'text-tertiary',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services-section"
      className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest/60"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-tertiary">What We Deliver</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Tailored Growth Engines
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            Modular capabilities structured to solve high-friction bottlenecks immediately.
          </p>
        </div>

        {/* Cards Grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`relative p-space-lg rounded-xl bg-surface-container/90 backdrop-blur-lg shadow-md ring-1 ring-outline-variant/20 ${service.hoverRing} flex flex-col gap-space-sm overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}
            >
              {/* Ambient glow */}
              <div className={`absolute top-0 right-0 w-36 h-36 ${service.glowColor} rounded-full blur-2xl pointer-events-none transition-colors duration-300`} />

              {/* Icon + Badge */}
              <div className="flex items-center justify-between relative">
                <div className={`w-12 h-12 rounded-xl ${service.accentBg} ${service.accentIcon} flex items-center justify-center ring-1 ${service.accentRing} shadow-inner`}>
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <span className={`font-label text-code-sm ${service.badgeColor} px-2.5 py-0.5 rounded-full ring-1`}>
                  {service.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline text-headline-sm font-semibold text-on-surface relative">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-body-sm text-on-surface-variant leading-relaxed flex-1 relative">
                {service.description}
              </p>

              {/* Deliverable Tags */}
              <div className="flex flex-wrap gap-1.5 relative">
                {service.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-2 py-0.5 rounded-md bg-surface-container-high/80 ${tag.color} font-label text-label-sm ring-1 ${tag.ring}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* CTA arrow */}
              <div className={`flex items-center gap-space-2xs ${service.ctaColor} font-label text-label-md group-hover:translate-x-1 transition-transform duration-200 relative`}>
                <span>{service.cta}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
