import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-12 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-on-surface-variant">
          © 2026 Team SAKSHAM
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Twitter</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
