import React from 'react';

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="section-label text-sm font-medium text-on-surface-variant uppercase tracking-wider mb-4 block">
            What we do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface tracking-tight">
            Services
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mt-4">
            We offer comprehensive solutions to help your business grow online and streamline operations.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <article className="border-t border-outline-variant/40 pt-8">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">code_blocks</span>
            </div>
            <h3 className="text-xl font-headline font-semibold text-on-surface">
              Web Development
            </h3>
            <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
              We design and build fast, responsive websites that convert visitors into customers. React, Next.js, and modern CMS platforms.
            </p>
            <div className="mt-6 text-sm text-on-surface-variant font-medium">
              React &middot; Next.js &middot; CMS
            </div>
          </article>

          {/* Service 2 */}
          <article className="border-t border-outline-variant/40 pt-8">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <h3 className="text-xl font-headline font-semibold text-on-surface">
              Digital Marketing
            </h3>
            <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
              Data-driven acquisition strategies, technical SEO, and retention flows that compound your revenue over time.
            </p>
            <div className="mt-6 text-sm text-on-surface-variant font-medium">
              SEO &middot; Paid Ads &middot; Email
            </div>
          </article>

          {/* Service 3 */}
          <article className="border-t border-outline-variant/40 pt-8">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="text-xl font-headline font-semibold text-on-surface">
              Automation
            </h3>
            <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
              We connect your tools and eliminate manual work with custom API integrations, CRM sync, and workflow automation.
            </p>
            <div className="mt-6 text-sm text-on-surface-variant font-medium">
              Make &middot; Zapier &middot; APIs
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
