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

  const scrollTo = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 800);
    } else {
      doScroll();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#121316]/80 backdrop-blur-md border-b border-[#2A2D35] py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="h-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center justify-between lg:grid lg:grid-cols-3">
        
        {/* Left: Logo */}
        <div className="flex justify-start items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo 
              size="custom" 
              className="h-6 md:h-7 w-auto max-w-full transition-[filter] duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.15)]" 
            />
          </Link>
        </div>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex justify-center items-center">
          <nav className="flex items-center gap-8 text-sm font-mono">
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer"
            >
              Home
            </Link>
            <button type="button" onClick={() => scrollTo('services-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer">
              Services
            </button>
            <button type="button" onClick={() => scrollTo('process-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer">
              Process
            </button>
            <Link to="/portfolio" className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap">
              Client Ships
            </Link>
            <button type="button" onClick={() => scrollTo('about-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer">
              About
            </button>
            <button type="button" onClick={() => scrollTo('faq-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer">
              FAQ
            </button>
          </nav>
        </div>

        {/* Right: CTA Button */}
        <div className="flex justify-end items-center">
          <button
            type="button"
            onClick={() => scrollTo('contact-section')}
            className="btn-primary text-sm whitespace-nowrap cursor-pointer"
          >
            Get in touch
          </button>
        </div>

      </div>
    </header>
  );
}
