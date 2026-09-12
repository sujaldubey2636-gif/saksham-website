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

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121316]/95 backdrop-blur-xl border-b border-[#2A2D35]'
          : 'bg-[#121316]/80 backdrop-blur-lg'
      }`}
    >
      <div className="h-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo size="md" className="transition-opacity group-hover:opacity-80" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-mono">
          {[
            { label: 'Services',  id: 'services-section' },
            { label: 'Work',      id: 'work-section' },
            { label: 'Process',   id: 'process-section' },
            { label: 'About',     id: 'about-section' },
            { label: 'FAQ',       id: 'faq-section' },
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={scrollTo(item.id)}
              className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact-section"
          onClick={scrollTo('contact-section')}
          className="btn-primary text-sm"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
