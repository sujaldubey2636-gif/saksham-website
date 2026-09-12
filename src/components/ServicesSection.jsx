import React from 'react';

export default function ServicesSection() {
  return (
    <section id="services-section" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <article className="border-t border-[#2A2D35] pt-8">
            <div className="w-12 h-12 rounded-lg bg-[#24272e] text-[#8A919E] flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">code_blocks</span>
            </div>
            <h3 className="text-xl font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">
              Web Development
            </h3>
            <p className="text-base text-[#8A919E] mt-3 leading-relaxed">
              We design and build fast, responsive websites that convert visitors into customers. React, Next.js, and modern CMS platforms.
            </p>
            <div className="mt-6 text-sm text-[#8A919E] font-medium">
              React &middot; Next.js &middot; CMS
            </div>
          </article>

          {/* Service 2 */}
          <article className="border-t border-[#2A2D35] pt-8">
            <div className="w-12 h-12 rounded-lg bg-[#24272e] text-[#8A919E] flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <h3 className="text-xl font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">
              Digital Marketing
            </h3>
            <p className="text-base text-[#8A919E] mt-3 leading-relaxed">
              Data-driven acquisition strategies, technical SEO, and retention flows that compound your revenue over time.
            </p>
            <div className="mt-6 text-sm text-[#8A919E] font-medium">
              SEO &middot; Paid Ads &middot; Email
            </div>
          </article>

          {/* Service 3 */}
          <article className="border-t border-[#2A2D35] pt-8">
            <div className="w-12 h-12 rounded-lg bg-[#24272e] text-[#8A919E] flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="text-xl font-['Bricolage_Grotesque',sans-serif] font-semibold text-[#F0F1F3]">
              Automation
            </h3>
            <p className="text-base text-[#8A919E] mt-3 leading-relaxed">
              We connect your tools and eliminate manual work with custom API integrations, CRM sync, and workflow automation.
            </p>
            <div className="mt-6 text-sm text-[#8A919E] font-medium">
              Make &middot; Zapier &middot; APIs
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
