import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full px-6 sm:px-10 lg:px-16 py-12 border-t border-[#2A2D35] bg-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Logo size="sm" variant="horizontal" />
          <span className="text-xs text-[#8A919E] border-l border-[#2A2D35] pl-4 font-mono">
            © {new Date().getFullYear()} Team SAKSHAM
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs font-mono">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors">Twitter</a>
          <a href="mailto:sujaldubey2636@gmail.com" className="text-[#8A919E] hover:text-[#F0F1F3] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
