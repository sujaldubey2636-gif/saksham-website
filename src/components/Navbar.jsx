import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#121316]/80 backdrop-blur-md border-b border-[#2A2D35] py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="h-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group pr-6">
          <Logo 
            size="custom" 
            className="h-8 md:h-10 w-auto max-w-full transition-[filter] duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.15)]" 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-mono">
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors"
          >
            Home
          </Link>
          <a href="#services-section" onClick={scrollTo('services-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors">
            Services
          </a>
          <a href="#process-section" onClick={scrollTo('process-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors">
            Process
          </a>
          <Link to="/portfolio" className="text-[#4cd7f6] hover:text-[#F0F1F3] transition-colors">
            Client Ships
          </Link>
          <a href="#about-section" onClick={scrollTo('about-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors">
            About
          </a>
          <a href="#faq-section" onClick={scrollTo('faq-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors">
            FAQ
          </a>
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
