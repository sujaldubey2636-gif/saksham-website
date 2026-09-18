import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full px-6 sm:px-10 lg:px-16 py-12 border-t border-[#2A2D35] bg-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Logo size="lg" variant="horizontal" />
          <span className="text-xs text-[#8A919E] border-l border-[#2A2D35] pl-4 font-mono">
            © {new Date().getFullYear()} Team SAKSHAM
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm font-mono">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#8A919E] hover:text-[#E58E26] transition-colors flex items-center gap-2 group" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="hidden sm:block text-xs">Instagram</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8A919E] hover:text-[#E58E26] transition-colors flex items-center gap-2 group" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="hidden sm:block text-xs">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
