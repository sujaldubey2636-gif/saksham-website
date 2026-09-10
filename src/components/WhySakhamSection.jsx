import React from 'react';

const WhySakhamSection = () => {
  const guarantees = [
    {
      icon: 'verified_user',
      title: 'Milestone-based billing',
      description: 'You approve each phase before any payment is triggered. No surprise invoices.',
    },
    {
      icon: 'lock_open_right',
      title: '100% code ownership',
      description: 'Full repository, design files, and deployment access transferred to you on day one.',
    },
    {
      icon: 'health_and_safety',
      title: '30-day post-launch care',
      description: 'We monitor, patch bugs, and answer questions for a full month after going live.',
    },
  ];

  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-16">
        <span className="section-label text-primary uppercase tracking-widest text-sm font-semibold">Our promise</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-on-surface">
          Built-in guarantees
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mt-4">
          We strip away the risk of working with external partners by embedding trust and accountability into our core offering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {guarantees.map((item) => (
          <div key={item.title} className="flex flex-col">
            <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-4">
              {item.icon}
            </span>
            <h3 className="text-lg font-headline font-semibold text-on-surface">
              {item.title}
            </h3>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed max-w-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySakhamSection;
