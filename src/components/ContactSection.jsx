import React, { useState, useEffect } from 'react';

const ContactSection = ({ selectedScope }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'web-dev',
    notes: '',
  });

  useEffect(() => {
    if (selectedScope) {
      setForm((prev) => ({
        ...prev,
        notes: `Selected Scope: ${selectedScope}`,
      }));
    }
  }, [selectedScope]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-section"
      className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-2xl bg-surface-container-lowest"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-2xs text-left max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-space-xs py-1 rounded-md bg-tertiary-container/20 text-tertiary w-fit ring-1 ring-tertiary/30">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span className="font-label text-label-sm font-semibold uppercase tracking-wider">Fast 2-Hour Response</span>
          </div>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Let's Build Something Capable Together
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            Zero pressure, no aggressive sales pitches. Speak directly with Saksham to review your bottlenecks, clarify deliverables, and get an honest feasibility assessment.
          </p>
        </div>

        <div className="max-w-3xl w-full flex flex-col gap-space-md">
          {/* Quick Direct Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-space-md rounded-xl font-label text-xs flex items-center justify-between transition-all duration-200 active:scale-[0.98] ring-1 ring-primary/40 hover:brightness-110 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #4d8eff 0%, #005ac2 50%, #571bc1 100%)',
                color: 'white',
              }}
            >
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-sm leading-tight">Book 15-Min Discovery</span>
                  <span className="text-[11px] text-primary-fixed opacity-90">Pick a time directly on calendar</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label text-xs flex items-center justify-between shadow-sm ring-1 ring-outline-variant/30 transition-all duration-200 active:scale-[0.98]"
            >
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-tertiary">chat</span>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-sm leading-tight">Direct WhatsApp Chat</span>
                  <span className="text-[11px] text-tertiary">Typically replies in under 15 minutes</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">north_east</span>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-space-sm my-1">
            <div className="flex-1 h-px bg-surface-bright/40" />
            <span className="font-label text-xs text-outline uppercase tracking-wider">Or send a direct project inquiry</span>
            <div className="flex-1 h-px bg-surface-bright/40" />
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-space-lg rounded-2xl bg-surface-container shadow-lg flex flex-col gap-space-md ring-1 ring-outline-variant/30 border-gradient-top"
          >
            {/* Name + Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-space-2xs text-left">
                <label htmlFor="contact-name" className="font-label text-xs font-semibold text-on-surface">
                  Your Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full min-h-[44px] px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body text-xs ring-1 ring-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-space-2xs text-left">
                <label htmlFor="contact-email" className="font-label text-xs font-semibold text-on-surface">
                  Work Email <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full min-h-[44px] px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body text-xs ring-1 ring-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all duration-200"
                />
              </div>
            </div>

            {/* Service Select */}
            <div className="flex flex-col gap-space-2xs text-left">
              <label htmlFor="contact-service" className="font-label text-xs font-semibold text-on-surface">
                Primary Goal / Service Focus
              </label>
              <div className="relative">
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full min-h-[44px] px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface font-body text-xs appearance-none ring-1 ring-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all duration-200"
                >
                  <option value="web-dev">High-Converting Website Development (Next.js / Astro)</option>
                  <option value="custom-webapp">Custom Web Application / Booking Portal</option>
                  <option value="workflow-automation">Workflow & API Automation (Make / Zapier)</option>
                  <option value="digital-marketing">Digital Marketing & Performance SEO</option>
                  <option value="overhaul">Complete Digital Overhaul (Website + Automation)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Project Notes / Scope */}
            <div className="flex flex-col gap-space-2xs text-left">
              <label htmlFor="contact-notes" className="font-label text-xs font-semibold text-on-surface flex items-center justify-between">
                <span>Project Context or Questions</span>
                <span className="text-[11px] text-outline font-normal">Optional</span>
              </label>
              <textarea
                id="contact-notes"
                rows={3}
                placeholder="Briefly share your current bottlenecks, targets, or link to your current website..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full p-space-md rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body text-xs ring-1 ring-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit / Success */}
            {!submitted ? (
              <button
                type="submit"
                className="w-full min-h-[48px] mt-space-2xs px-space-md py-space-sm rounded-xl font-label text-sm font-semibold flex items-center justify-center gap-space-xs transition-all duration-200 active:scale-[0.98] hover:brightness-110 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #4d8eff 0%, #571bc1 100%)',
                  color: 'white',
                  boxShadow: '0 0 24px rgba(77, 142, 255, 0.35)',
                }}
              >
                <span>Submit Inquiry to Saksham</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            ) : (
              <div className="p-space-md rounded-xl bg-tertiary-container/30 text-tertiary ring-1 ring-tertiary/40 text-center font-body text-xs flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
                <strong className="text-sm">Inquiry received directly by Saksham!</strong>
                <span>You will receive an honest, tailored response to your inbox within 2 hours.</span>
              </div>
            )}
          </form>

          {/* Psychological Reassurance Strip */}
          <div className="flex flex-wrap items-center justify-center gap-space-md text-center pt-space-2xs text-[11px] text-outline">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-primary">lock</span>
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
              <span>No spam or sales harassment</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-secondary">handshake</span>
              <span>Direct engineer response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
