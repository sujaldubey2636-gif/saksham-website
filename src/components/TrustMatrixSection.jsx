import React from 'react';

const TrustMatrixSection = () => {
  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-left max-w-2xl mb-12">
        <span className="section-label text-primary uppercase tracking-widest text-sm font-semibold">Why us</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-on-surface">
          The SAKSHAM difference
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mt-4">
          See how we stack up against traditional options. We believe in direct communication, speed, and complete transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Team SAKSHAM */}
        <div className="bg-surface-container border border-primary/20 rounded-xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-headline font-semibold text-on-surface">Team SAKSHAM</h3>
            <span className="text-sm text-primary mt-1 block">The modern partner</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
              <span className="text-on-surface text-base">Direct senior engineer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
              <span className="text-on-surface text-base">7-14 day delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
              <span className="text-on-surface text-base">100% code ownership</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
              <span className="text-on-surface text-base">Fixed milestone pricing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
              <span className="text-on-surface text-base">30-day post-launch support</span>
            </li>
          </ul>
        </div>

        {/* Agencies */}
        <div className="bg-surface-container border border-outline-variant/20 rounded-xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-headline font-semibold text-on-surface">Agencies</h3>
            <span className="text-sm text-outline mt-1 block">Traditional & slow</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Junior account managers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">3-6 month timelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Proprietary lock-in</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Hourly billing surprises</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Expensive retainers</span>
            </li>
          </ul>
        </div>

        {/* Freelancers */}
        <div className="bg-surface-container border border-outline-variant/20 rounded-xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-headline font-semibold text-on-surface">Freelancers</h3>
            <span className="text-sm text-outline mt-1 block">Hit or miss</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Often unavailable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Unpredictable timelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Messy handoffs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">Pay per task</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-outline mt-0.5 text-xl">cancel</span>
              <span className="text-on-surface-variant text-base">No support guarantees</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustMatrixSection;
