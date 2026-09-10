import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-xl border-b border-outline-variant/20'
          : 'bg-surface/80 backdrop-blur-lg'
      }`}
    >
      <div className="h-16 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo size="md" className="transition-opacity group-hover:opacity-80" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {[
            { label: 'Services',  href: '#services-section' },
            { label: 'Work',      href: '#work-section' },
            { label: 'Process',   href: '#process-section' },
            { label: 'About',     href: '#about-section' },
            { label: 'FAQ',       href: '#faq-section' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact-section" className="btn-primary text-sm">
          Get in touch
        </a>
      </div>
    </header>
  );
}
