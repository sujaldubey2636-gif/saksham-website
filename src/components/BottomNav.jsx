import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Overview',  icon: 'dashboard',                href: '#',               path: '/'         },
  { label: 'Solutions', icon: 'precision_manufacturing',  href: '#services-section', path: '/solutions'},
  { label: 'Work',      icon: 'rocket_launch',            href: '#work-section',   path: '/work'     },
  { label: 'Agency',   icon: 'groups',                   href: '#about-section',  path: '/about'    },
  { label: 'Contact',  icon: 'support_agent',            href: '#contact-section',path: '/contact'  },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.3)] md:hidden">
      <div className="flex items-center justify-around h-16 px-space-xs max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path && item.path === '/';
          return (
            <a
              key={item.label}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-space-xs transition-all duration-200 ${
                isActive
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="font-label text-label-sm mt-0.5 leading-none">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
