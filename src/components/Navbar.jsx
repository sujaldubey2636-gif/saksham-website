import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-safe ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.3)] border-b border-surface-bright/30'
          : 'bg-surface/75 backdrop-blur-lg'
      }`}
    >
      <div className="h-16 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop max-w-screen-xl mx-auto flex items-center justify-between gap-space-sm">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-space-xs group">
          <Logo size="md" className="transition-opacity group-hover:opacity-90" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-space-md text-label-md font-label">
          {[
            { label: 'Solutions', href: '#services-section' },
            { label: 'Estimator', href: '#estimator-section' },
            { label: 'Work',      href: '#work-section' },
            { label: 'Process',   href: '#process-section' },
            { label: 'Guarantee', href: '#why-section' },
            { label: 'FAQ',       href: '#faq-section' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 font-semibold text-xs tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href="#estimator-section"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-label font-semibold text-tertiary bg-tertiary-container/20 ring-1 ring-tertiary/30 hover:bg-tertiary-container/30 transition-all"
          >
            <span className="material-symbols-outlined text-[15px]">calculate</span>
            <span>Calculate Scope</span>
          </a>
          <a
            href="#contact-section"
            className="flex items-center gap-1.5 px-space-sm py-1.5 rounded-full text-xs font-label font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95 shadow-md"
            style={{
              background: 'linear-gradient(135deg, #4d8eff 0%, #571bc1 100%)',
              boxShadow: '0 0 16px rgba(77, 142, 255, 0.4)',
            }}
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            <span className="hidden xs:inline">Book 15-Min Call</span>
            <span className="xs:hidden">Book</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
