import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-safe ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.25)]'
          : 'bg-surface/70 backdrop-blur-lg'
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
            { label: 'Work',      href: '#work-section' },
            { label: 'Agency',    href: '#about-section' },
            { label: 'Contact',   href: '#contact-section' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 font-semibold text-sm tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact-section"
          className="flex items-center gap-space-2xs px-space-sm py-space-xs rounded-full text-label-md font-label font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #4d8eff 0%, #571bc1 100%)',
            boxShadow: '0 0 16px rgba(77, 142, 255, 0.4)',
          }}
        >
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          <span className="hidden sm:inline">Book a Call</span>
          <span className="sm:hidden">Book</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
