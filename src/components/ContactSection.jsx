import React, { useState } from 'react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: 'web-dev' });

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
          <span className="section-label text-tertiary">Let's Build</span>
          <h2 className="font-display font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Ready to Upgrade Your Digital Presence?
          </h2>
          <p className="font-body text-body-sm md:text-body-md text-on-surface-variant">
            Tell us about your project or schedule a zero-pressure conversation.
          </p>
        </div>

        <div className="max-w-2xl w-full flex flex-col gap-space-md">
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-space-xs">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[50px] px-space-md py-space-sm rounded-xl font-label text-label-md flex items-center justify-between transition-all duration-200 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #4d8eff 0%, #005ac2 50%, #571bc1 100%)',
                color: 'white',
                boxShadow: '0 0 20px rgba(77, 142, 255, 0.4)',
              }}
            >
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Book a Free 15-Min Discovery Call</span>
              </div>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none min-h-[46px] px-space-md py-space-sm rounded-xl bg-surface-container text-on-surface font-label text-label-md flex items-center justify-between shadow-sm hover:bg-surface-container-high transition-all duration-200 active:scale-[0.98]"
            >
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-tertiary">chat</span>
                <span>
                  Chat on WhatsApp{' '}
                  <span className="text-tertiary font-normal">• 5 min response</span>
                </span>
              </div>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">north_east</span>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-space-sm">
            <div className="flex-1 h-px bg-surface-bright/40" />
            <span className="font-label text-label-sm text-outline uppercase tracking-wider">Or send a message</span>
            <div className="flex-1 h-px bg-surface-bright/40" />
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-space-lg rounded-xl bg-surface-container shadow-md flex flex-col gap-space-md ring-1 ring-outline-variant/20"
          >
            {/* Name */}
            <div className="flex flex-col gap-space-2xs text-left">
              <label htmlFor="contact-name" className="font-label text-label-sm font-semibold text-on-surface">
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full min-h-[44px] px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body text-body-sm ring-1 ring-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-space-2xs text-left">
              <label htmlFor="contact-email" className="font-label text-label-sm font-semibold text-on-surface">
                Work Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="jane@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full min-h-[44px] px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body text-body-sm ring-1 ring-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all duration-200"
              />
            </div>

            {/* Service Select */}
            <div className="flex flex-col gap-space-2xs text-left">
              <label htmlFor="contact-service" className="font-label text-label-sm font-semibold text-on-surface">
                What do you need help with?
              </label>
              <div className="relative">
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full min-h-[44px] px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface font-body text-body-sm appearance-none ring-1 ring-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all duration-200"
                >
                  <option value="web-dev">Website Development</option>
                  <option value="workflow-automation">Workflow Automation</option>
                  <option value="digital-marketing">Digital Marketing & SEO</option>
                  <option value="overhaul">Full Digital Overhaul</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Submit / Success */}
            {!submitted ? (
              <button
                type="submit"
                className="w-full min-h-[48px] mt-space-2xs px-space-md py-space-sm rounded-xl font-label text-label-md font-semibold flex items-center justify-center gap-space-xs transition-all duration-200 active:scale-[0.98] hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #4d8eff 0%, #571bc1 100%)',
                  color: 'white',
                  boxShadow: '0 0 20px rgba(77, 142, 255, 0.35)',
                }}
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            ) : (
              <div className="p-space-sm rounded-xl bg-tertiary-container/30 text-tertiary ring-1 ring-tertiary/30 text-center font-body text-body-sm">
                ✅ Message received! Saksham will respond within 4 hours.
              </div>
            )}
          </form>

          {/* Reassurance */}
          <div className="flex items-center gap-space-xs justify-center text-center">
            <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
            <p className="font-body text-body-sm text-on-surface-variant">
              No spam, no aggressive sales pitch. Just practical solutions for your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
