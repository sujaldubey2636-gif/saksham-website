import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      const poll = setInterval(() => {
        const el = document.getElementById(id);
        if (el) {
          clearInterval(poll);
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      setTimeout(() => clearInterval(poll), 5000);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { label: 'Home', action: () => { setMenuOpen(false); if (location.pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }); } else { navigate('/'); } }, isLink: false },
    { label: 'Services', action: () => handleNav('services-section'), isLink: false },
    { label: 'Feedback', action: () => handleNav('feedback-section'), isLink: false },
    { label: 'Client Ships', to: '/portfolio', isLink: true },
    { label: 'About', action: () => handleNav('about-section'), isLink: false },
    { label: 'Contact', action: () => handleNav('contact-section'), isLink: false },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'bg-[#121316]/95 backdrop-blur-md border-b border-[#2A2D35] py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="h-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center justify-between lg:grid lg:grid-cols-3">
          
          {/* Left: Logo */}
          <div className="flex justify-start items-center">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
              <Logo 
                size="custom" 
                className="h-6 md:h-7 w-auto max-w-full transition-[filter] duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.15)]" 
              />
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop Only) */}
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

          {/* Right: CTA + Hamburger */}
          <div className="flex justify-end items-center gap-4">
            <a
              onClick={() => handleNav('contact-section')}
              className="btn-primary text-sm whitespace-nowrap cursor-pointer select-none hidden sm:inline-flex"
            >
              Get in touch
            </a>

            {/* Hamburger Button (Mobile & Tablet) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg border border-[#2A2D35] bg-[#1A1C21]/80 hover:bg-[#24272e] transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[2px] bg-[#F0F1F3] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block w-5 h-[2px] bg-[#F0F1F3] rounded-full my-[3px] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block w-5 h-[2px] bg-[#F0F1F3] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-[calc(4rem+1px)] right-0 z-40 w-72 h-[calc(100vh-4rem)] bg-[#121316] border-l border-[#2A2D35] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            link.isLink ? (
              <Link 
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#8A919E] hover:text-[#F0F1F3] hover:bg-[#1A1C21] transition-all font-mono text-sm"
              >
                {link.label}
              </Link>
            ) : (
              <a 
                key={link.label}
                onClick={link.action}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#8A919E] hover:text-[#F0F1F3] hover:bg-[#1A1C21] transition-all font-mono text-sm cursor-pointer select-none"
              >
                {link.label}
              </a>
            )
          ))}

          {/* Mobile CTA */}
          <div className="mt-6 pt-6 border-t border-[#2A2D35]">
            <a
              onClick={() => handleNav('contact-section')}
              className="btn-primary w-full text-sm text-center cursor-pointer select-none"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
