import React from 'react';

const COMPARISON_ROWS = [
  {
    feature: 'Who builds your system?',
    saksham: 'Saksham directly (Senior engineer with 10+ yrs experience)',
    agency: 'Junior interns or outsourced white-label subcontractors',
    freelancer: 'Single unvetted contractor (risk of sudden ghosting)',
    sakshamGood: true,
  },
  {
    feature: 'Delivery & turnaround speed',
    saksham: '7 to 14 business days in hyper-focused agile sprints',
    agency: '3 to 6 months dragged out by internal bureaucracy',
    freelancer: 'Open-ended, prone to delays and missed milestones',
    sakshamGood: true,
  },
  {
    feature: 'Code & asset ownership',
    saksham: '100% yours on Day 1 (Full GitHub repository & design transfer)',
    agency: 'Held hostage on proprietary builders or monthly retainers',
    freelancer: 'Vague contracts, messy code, or missing environment keys',
    sakshamGood: true,
  },
  {
    feature: 'Pricing & scope predictability',
    saksham: 'Fixed milestone pricing with zero surprise charges',
    agency: 'Bloated $15k+ quotes with creeping billable hours',
    freelancer: 'Starts cheap, then multiplies with hidden "scope changes"',
    sakshamGood: true,
  },
  {
    feature: 'Post-launch support & guarantee',
    saksham: 'Included 30-day hypercare + video training library',
    agency: '$250/hr minimum retainer or tickets ignored for days',
    freelancer: 'Unavailable once the final invoice is cleared',
    sakshamGood: true,
  },
];

const TrustMatrixSection = () => {
  return (
    <section id="trust-matrix-section" className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <span className="section-label text-primary">Radical Transparency</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Why Growing Businesses Choose Team SAKSHAM
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            You don't need layers of account managers, bloated markups, or the anxiety of disappearing freelancers. Here is how we compare side-by-side.
          </p>
        </div>

        {/* Comparison Table / Cards for Mobile & Desktop */}
        <div className="w-full overflow-x-auto rounded-2xl ring-1 ring-outline-variant/30 shadow-xl bg-surface-container-low">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-surface-bright/40 bg-surface-container/70">
                <th className="p-space-md font-label text-xs uppercase tracking-wider text-outline w-1/4">
                  Feature & Expectation
                </th>
                <th className="p-space-md font-headline text-sm font-bold text-primary bg-primary-container/10 border-x border-primary/20 w-1/3">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                    <span>Team SAKSHAM</span>
                  </div>
                </th>
                <th className="p-space-md font-headline text-sm font-semibold text-on-surface-variant w-1/4">
                  Traditional Agencies
                </th>
                <th className="p-space-md font-headline text-sm font-semibold text-on-surface-variant w-1/4">
                  Anonymous Freelancers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-bright/20 font-body text-xs">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="hover:bg-surface-container/40 transition-colors">
                  <td className="p-space-md font-semibold text-on-surface">
                    {row.feature}
                  </td>
                  <td className="p-space-md text-on-surface bg-primary-container/5 border-x border-primary/20 font-medium">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">check_circle</span>
                      <span>{row.saksham}</span>
                    </div>
                  </td>
                  <td className="p-space-md text-on-surface-variant">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">cancel</span>
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-space-md text-on-surface-variant">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] text-error shrink-0 mt-0.5">cancel</span>
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trust Badges Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
          <div className="p-space-sm rounded-xl bg-surface-container/70 ring-1 ring-outline-variant/20 flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[22px]">lock_reset</span>
            <div className="flex flex-col">
              <span className="font-label text-xs font-semibold text-on-surface">No Vendor Lock-In</span>
              <span className="font-body text-[11px] text-outline">You own the code, hosting, and data 100%.</span>
            </div>
          </div>
          <div className="p-space-sm rounded-xl bg-surface-container/70 ring-1 ring-outline-variant/20 flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-tertiary text-[22px]">published_with_changes</span>
            <div className="flex flex-col">
              <span className="font-label text-xs font-semibold text-on-surface">Milestone-Based Billing</span>
              <span className="font-body text-[11px] text-outline">Funds only released when milestones pass.</span>
            </div>
          </div>
          <div className="p-space-sm rounded-xl bg-surface-container/70 ring-1 ring-outline-variant/20 flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[22px]">support_agent</span>
            <div className="flex flex-col">
              <span className="font-label text-xs font-semibold text-on-surface">Direct Line to Builder</span>
              <span className="font-body text-[11px] text-outline">Zero middleman telephone game.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMatrixSection;
