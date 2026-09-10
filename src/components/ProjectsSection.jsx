import React from 'react';

const PROJECTS = [
  {
    title: 'Aura Studio',
    category: 'Web Application',
    description:
      'Boutique dental & wellness booking engine featuring unified calendar sync, instant SMS reminders, and zero checkout friction.',
    metric: { icon: 'speed', label: '99/100 PageSpeed' },
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9G-TwQ1GEcGHRP8HHQPO9L0XjBmhhFQKaaCQdemTy5Skq_D1nX1m3BC5Nhsd4a2mYHuwOYnmnxknMP_gFRRq_vQFab0VxUmp2Yk3wOc5HG43BMY4BUImTJhA0VnavOIWwKmmdSNPbSh4Tds8rxQUgG4qphSVNL3E9m5Vy09lNd0KXfXWF1MCT3d9BV8FqoRaCEyUMBE2SIXTY8oazKR_lJHB2ueXIyQ1VeCmC44angNiO2llUiLAi',
    imageAlt: 'Aura Studio dental booking app dark mode UI on iPhone mockup',
  },
  {
    title: 'Apex Logistics',
    category: 'Workflow Pipeline',
    description:
      'Automated dispatch and invoice pipeline routing 50+ regional shipments daily, generating PDF bill-of-lading and instant customer notifications.',
    metric: { icon: 'schedule', label: '14 hrs/wk Saved' },
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-jbbPrfdESCP2GDAgwHSnUU2IWrJYWzdyeNOZJzZRTSh6OkzFriuO4L8P-HpIGtPzu5gJ4xAEtSJu74oSD_QwdI_SIAFRWMVHhMGGuwHePXP4xU0gBxYbbrQEIxl7aJOhf2Skz90CFBA84U_YPp5SLYY53UjrywmOE1IAiJ6vzUdvlD8JxQE9HF8fvwm-Y29Wk20DtN-vrjjvESFZ6lppXjN1Et8N9Xii2uVn1TdF30SuEQ5-yteE',
    imageAlt: 'Apex Logistics dark futuristic automation dashboard with telemetry maps',
  },
  {
    title: 'Pulse Coffee Roasters',
    category: 'E-Commerce & CRM',
    description:
      'D2C artisan coffee storefront engineered for subscription recurring revenue with automated 4-stage post-purchase retention sequence.',
    metric: { icon: 'repeat', label: '32% Recurring Ratio' },
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6iCqZYvwjKgx7qyRTFEJ1xwNqQoEd0BemwnciouQxA4mpGxW3kBefkgAVkNHtupBPrbvHH3XPhxPUYsrzitqLCl52Do1XmkY1Tbt-vejO3iczU6WDD9ccGZ6ahNaOQeEGT13OR_KDVsCsjg8pjxAxr9ej5RHTzZhL8rpvCQmqLIwhBIlCiF6VgVKVRsJZd54UBFJuZZQTt1ifsfYlP7Fr3iaFrCPn0VtD9or0QMF22TwWr6HhD_7P',
    imageAlt: 'Pulse Coffee artisanal ecommerce product page on dark canvas',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="work-section"
      className="py-24 lg:py-32 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <span className="section-label text-sm font-medium text-on-surface-variant uppercase tracking-wider mb-4 block">
            Our work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface tracking-tight">
            Selected projects
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mt-4">
            A showcase of our recent engagements, spanning high-performance web applications to complex automation pipelines.
          </p>
        </header>

        <div className="flex flex-col gap-16">
          {PROJECTS.map((project) => (
            <article key={project.title} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-full lg:w-3/5 rounded-xl bg-surface-container-high overflow-hidden shrink-0">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:pt-8">
                <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-2xl font-headline font-semibold text-on-surface mt-2">
                  {project.title}
                </h3>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="material-symbols-outlined text-[18px]">{project.metric.icon}</span>
                  {project.metric.label}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
