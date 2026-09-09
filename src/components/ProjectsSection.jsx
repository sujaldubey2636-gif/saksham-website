import React from 'react';

const PROJECTS = [
  {
    title: 'Aura Studio',
    subtitle: 'Next.js + Cal.com',
    subtitleColor: 'text-tertiary bg-tertiary-container/20 ring-tertiary/20',
    category: 'Web Application',
    categoryColor: 'text-primary ring-primary/20',
    description:
      'Boutique dental & wellness booking engine featuring unified calendar sync, instant SMS reminders, and zero checkout friction.',
    metric: { icon: 'speed', label: '99/100 PageSpeed', color: 'text-tertiary' },
    cta: 'Live Prototype',
    hoverRing: 'hover:ring-primary/30',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9G-TwQ1GEcGHRP8HHQPO9L0XjBmhhFQKaaCQdemTy5Skq_D1nX1m3BC5Nhsd4a2mYHuwOYnmnxknMP_gFRRq_vQFab0VxUmp2Yk3wOc5HG43BMY4BUImTJhA0VnavOIWwKmmdSNPbSh4Tds8rxQUgG4qphSVNL3E9m5Vy09lNd0KXfXWF1MCT3d9BV8FqoRaCEyUMBE2SIXTY8oazKR_lJHB2ueXIyQ1VeCmC44angNiO2llUiLAi',
    imageAlt: 'Aura Studio dental booking app dark mode UI on iPhone mockup',
  },
  {
    title: 'Apex Logistics',
    subtitle: 'Airtable + Make',
    subtitleColor: 'text-secondary bg-secondary-container/20 ring-secondary/20',
    category: 'Workflow Pipeline',
    categoryColor: 'text-secondary ring-secondary/20',
    description:
      'Automated dispatch and invoice pipeline routing 50+ regional shipments daily, generating PDF bill-of-lading and instant customer notifications.',
    metric: { icon: 'schedule', label: '14 hrs/wk Saved', color: 'text-secondary' },
    cta: 'Flow Architecture',
    hoverRing: 'hover:ring-secondary/30',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-jbbPrfdESCP2GDAgwHSnUU2IWrJYWzdyeNOZJzZRTSh6OkzFriuO4L8P-HpIGtPzu5gJ4xAEtSJu74oSD_QwdI_SIAFRWMVHhMGGuwHePXP4xU0gBxYbbrQEIxl7aJOhf2Skz90CFBA84U_YPp5SLYY53UjrywmOE1IAiJ6vzUdvlD8JxQE9HF8fvwm-Y29Wk20DtN-vrjjvESFZ6lppXjN1Et8N9Xii2uVn1TdF30SuEQ5-yteE',
    imageAlt: 'Apex Logistics dark futuristic automation dashboard with telemetry maps',
  },
  {
    title: 'Pulse Coffee Roasters',
    subtitle: 'Shopify + Klaviyo',
    subtitleColor: 'text-primary bg-primary-container/20 ring-primary/20',
    category: 'E-Commerce & CRM',
    categoryColor: 'text-tertiary ring-tertiary/20',
    description:
      'D2C artisan coffee storefront engineered for subscription recurring revenue with automated 4-stage post-purchase retention sequence.',
    metric: { icon: 'repeat', label: '32% Recurring Ratio', color: 'text-tertiary' },
    cta: 'Storefront Demo',
    hoverRing: 'hover:ring-primary/30',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6iCqZYvwjKgx7qyRTFEJ1xwNqQoEd0BemwnciouQxA4mpGxW3kBefkgAVkNHtupBPrbvHH3XPhxPUYsrzitqLCl52Do1XmkY1Tbt-vejO3iczU6WDD9ccGZ6ahNaOQeEGT13OR_KDVsCsjg8pjxAxr9ej5RHTzZhL8rpvCQmqLIwhBIlCiF6VgVKVRsJZd54UBFJuZZQTt1ifsfYlP7Fr3iaFrCPn0VtD9or0QMF22TwWr6HhD_7P',
    imageAlt: 'Pulse Coffee artisanal ecommerce product page on dark canvas',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="work-section"
      className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest/80"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-tertiary">Proof of Craft</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Concept Projects
          </h2>
          <div className="inline-flex items-center gap-space-2xs px-space-xs py-1 rounded-md bg-surface-container-high text-on-surface-variant w-fit mt-space-2xs">
            <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
            <span className="font-label text-label-sm">Sample Demo Work • Concept Builds for Modern Businesses</span>
          </div>
        </div>

        {/* Cards Grid: 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`rounded-xl bg-surface-container overflow-hidden shadow-lg ring-1 ring-outline-variant/20 ${project.hoverRing} flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1`}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-48 md:h-52 bg-surface-container-high overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                <div className={`absolute top-3 right-3 px-space-xs py-1 rounded-full bg-surface-dim/90 backdrop-blur-md font-label text-label-sm font-semibold ring-1 ${project.categoryColor}`}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-space-lg flex flex-col gap-space-xs flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="font-headline text-headline-sm font-bold text-on-surface">{project.title}</h3>
                  <span className={`font-label text-code-sm ${project.subtitleColor} px-2 py-0.5 rounded ring-1 shrink-0`}>
                    {project.subtitle}
                  </span>
                </div>
                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label text-label-sm">
                  <span className={`${project.metric.color} font-semibold flex items-center gap-1`}>
                    <span className="material-symbols-outlined text-[16px]">{project.metric.icon}</span>
                    {project.metric.label}
                  </span>
                  <a href="#" className="text-primary hover:text-primary-fixed font-medium flex items-center gap-1 transition-colors duration-200">
                    <span>{project.cta}</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
