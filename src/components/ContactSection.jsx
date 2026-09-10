import React, { useState, useEffect } from 'react';

const ContactSection = ({ selectedScope }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'High-Converting Website Development',
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
    <section id="contact-section" className="py-24 lg:py-32 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Side */}
        <div className="flex flex-col text-left">
          <span className="section-label text-primary text-sm font-semibold tracking-wider uppercase">Get in touch</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-on-surface mt-2">
            Let's talk about your project
          </h2>
          <p className="text-base text-on-surface-variant mt-4 leading-relaxed">
            Tell us what you're working on and we'll get back to you within a few hours.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">mail</span>
              <span className="text-sm text-on-surface-variant">hello@teamsaksham.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">chat</span>
              <span className="text-sm text-on-surface-variant">WhatsApp — typically replies in 15 min</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">calendar_month</span>
              <span className="text-sm text-on-surface-variant">Book a 15-minute discovery call</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <form onSubmit={handleSubmit} className="bg-surface-container rounded-xl p-8 border border-outline-variant/20 flex flex-col">
            {submitted ? (
              <div className="text-center py-8">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">check_circle</span>
                <h3 className="text-xl font-bold text-on-surface mb-2">Message sent</h3>
                <p className="text-on-surface-variant text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-on-surface mb-2 block">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg bg-surface-container-high border border-outline-variant/30 p-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/50 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-on-surface mb-2 block">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg bg-surface-container-high border border-outline-variant/30 p-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/50 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-on-surface mb-2 block">Service</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-lg bg-surface-container-high border border-outline-variant/30 p-3 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition appearance-none"
                  >
                    <option>High-Converting Website Development</option>
                    <option>Custom Web Application</option>
                    <option>Workflow Automation</option>
                    <option>Digital Marketing</option>
                    <option>Complete Digital Overhaul</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="notes" className="text-sm font-medium text-on-surface mb-2 block">Message</label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full rounded-lg bg-surface-container-high border border-outline-variant/30 p-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/50 transition resize-none"
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full mt-2 py-3 rounded-lg bg-primary text-surface font-semibold hover:bg-primary/90 transition-colors">
                  Send message
                </button>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
