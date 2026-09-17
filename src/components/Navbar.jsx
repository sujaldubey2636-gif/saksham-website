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

  const handleNav = (id) => {
    // Navigate home if not already there
    if (location.pathname !== '/') {
      navigate('/');
      
      // Poll until the element is in the DOM, then scroll
      const poll = setInterval(() => {
        const el = document.getElementById(id);
        if (el) {
          clearInterval(poll);
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      setTimeout(() => clearInterval(poll), 5000); // safety timeout
    } else {
      // Already on home, scroll immediately
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
            
            {/* Using <a> tags without href. This prevents HashRouter bugs completely and behaves identically to normal text links for clicking */}
            <a onClick={() => handleNav('services-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer select-none">
              Services
            </a>
            <a onClick={() => handleNav('feedback-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer select-none">
              Feedback
            </a>
            <Link to="/portfolio" className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap">
              Client Ships
            </Link>
            <a onClick={() => handleNav('about-section')} className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors whitespace-nowrap cursor-pointer select-none">
              About
            </a>
          </nav>
        </div>

        {/* Right: CTA Button */}
        <div className="flex justify-end items-center">
          <a
            onClick={() => handleNav('contact-section')}
            className="btn-primary text-sm whitespace-nowrap cursor-pointer select-none"
          >
            Get in touch
          </a>
        </div>

      </div>
    </header>
  );
}
