import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-space-xl bg-surface-container-lowest mt-space-2xl pb-20 md:pb-space-xl">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-space-md items-center text-center">
        {/* Brand */}
        <div className="flex items-center gap-space-xs justify-center">
          <Logo size="md" />
        </div>

        <p className="font-body text-body-sm text-on-surface-variant max-w-xs">
          Capable solutions for growing businesses
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-space-sm pt-space-xs">
          {[
            { icon: 'chat',           label: 'WhatsApp',  href: 'https://wa.me',          color: 'text-tertiary' },
            { icon: 'mail',           label: 'Email',     href: 'mailto:contact@teamsaksham.com', color: 'text-primary' },
            { icon: 'event_available',label: 'Schedule',  href: '#contact-section',        color: 'text-secondary' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`min-h-[44px] min-w-[44px] rounded-full bg-surface-container flex items-center justify-center ${social.color} hover:brightness-125 transition-all duration-200`}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="material-symbols-outlined">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* Nav Links */}
        <div className="flex items-center justify-center gap-space-md pt-space-xs font-label text-label-sm text-on-surface-variant flex-wrap">
          {['LinkedIn', 'Twitter / X', 'GitHub'].map((link, i, arr) => (
            <React.Fragment key={link}>
              <a href="#" className="hover:text-primary transition-colors duration-200">{link}</a>
              {i < arr.length - 1 && <span className="text-outline-variant">•</span>}
            </React.Fragment>
          ))}
        </div>

        <p className="font-label text-label-sm text-outline pt-space-xs">
          © {new Date().getFullYear()} Team SAKSHAM. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
