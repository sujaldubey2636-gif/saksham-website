import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-12 border-t border-outline-variant/20 bg-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Logo size="sm" variant="horizontal" />
          <span className="text-xs text-on-surface-variant border-l border-outline-variant/30 pl-4 font-mono">
            © {new Date().getFullYear()} Team SAKSHAM
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs font-mono">
          <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">LinkedIn</a>
          <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">Twitter</a>
          <a href="mailto:hello@teamsaksham.com" className="text-on-surface-variant hover:text-on-surface transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
