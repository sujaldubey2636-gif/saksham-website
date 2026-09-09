/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surface scale
        'surface':                   '#0f131d',
        'surface-dim':               '#0f131d',
        'surface-bright':            '#353944',
        'surface-container-lowest':  '#0a0e18',
        'surface-container-low':     '#171b26',
        'surface-container':         '#1c1f2a',
        'surface-container-high':    '#262a35',
        'surface-container-highest': '#313540',
        'surface-variant':           '#313540',
        'surface-tint':              '#adc6ff',
        // On-surface
        'on-surface':         '#dfe2f1',
        'on-surface-variant': '#c2c6d6',
        'inverse-surface':    '#dfe2f1',
        'inverse-on-surface': '#2c303b',
        // Outline
        'outline':         '#8c909f',
        'outline-variant': '#424754',
        // Primary
        'primary':              '#adc6ff',
        'on-primary':           '#002e6a',
        'primary-container':    '#4d8eff',
        'on-primary-container': '#00285d',
        'inverse-primary':      '#005ac2',
        'primary-fixed':        '#d8e2ff',
        'primary-fixed-dim':    '#adc6ff',
        'on-primary-fixed':     '#001a42',
        'on-primary-fixed-variant': '#004395',
        // Secondary
        'secondary':              '#d0bcff',
        'on-secondary':           '#3c0091',
        'secondary-container':    '#571bc1',
        'on-secondary-container': '#c4abff',
        'secondary-fixed':        '#e9ddff',
        'secondary-fixed-dim':    '#d0bcff',
        'on-secondary-fixed':     '#23005c',
        'on-secondary-fixed-variant': '#5516be',
        // Tertiary
        'tertiary':              '#4cd7f6',
        'on-tertiary':           '#003640',
        'tertiary-container':    '#009eb9',
        'on-tertiary-container': '#002f38',
        'tertiary-fixed':        '#acedff',
        'tertiary-fixed-dim':    '#4cd7f6',
        'on-tertiary-fixed':     '#001f26',
        'on-tertiary-fixed-variant': '#004e5c',
        // Error
        'error':              '#ffb4ab',
        'on-error':           '#690005',
        'error-container':    '#93000a',
        'on-error-container': '#ffdad6',
        // Background
        'background':    '#0f131d',
        'on-background': '#dfe2f1',
        // Brand overrides (Electric Slate Digital)
        'brand-blue':   '#3B82F6',
        'brand-violet': '#8B5CF6',
        'brand-cyan':   '#06B6D4',
      },
      borderRadius: {
        DEFAULT: '0.5rem',    // 8px
        sm:      '0.25rem',   // 4px
        md:      '0.75rem',   // 12px
        lg:      '1rem',      // 16px
        xl:      '1.5rem',    // 24px
        full:    '9999px',
      },
      spacing: {
        'space-2xs':       '0.25rem',  // 4px
        'space-xs':        '0.5rem',   // 8px
        'space-sm':        '0.75rem',  // 12px
        'space-md':        '1rem',     // 16px
        'space-lg':        '1.5rem',   // 24px
        'space-xl':        '2rem',     // 32px
        'space-2xl':       '3rem',     // 48px
        'space-3xl':       '4rem',     // 64px
        'space-4xl':       '6rem',     // 96px
        'gutter-mobile':   '0.75rem',
        'gutter-tablet':   '1rem',
        'gutter-desktop':  '1.5rem',
        'container-max':   '80rem',
      },
      fontFamily: {
        display:  ['"Plus Jakarta Sans"', 'sans-serif'],
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
        label:    ['Inter', 'sans-serif'],
        sans:     ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['3.75rem', { lineHeight: '1.1',  letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-hero-mobile': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg':        ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.025em', fontWeight: '700' }],
        'headline-lg-mobile': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.02em',  fontWeight: '700' }],
        'headline-md':        ['1.5rem',  { lineHeight: '1.3',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'headline-sm':        ['1.25rem', { lineHeight: '1.4',  letterSpacing: '-0.01em',  fontWeight: '600' }],
        'body-lg':            ['1.125rem',{ lineHeight: '1.6',  letterSpacing: '-0.01em',  fontWeight: '400' }],
        'body-md':            ['1rem',    { lineHeight: '1.5',  letterSpacing: '0em',      fontWeight: '400' }],
        'body-sm':            ['0.875rem',{ lineHeight: '1.5',  letterSpacing: '0em',      fontWeight: '400' }],
        'label-md':           ['0.875rem',{ lineHeight: '1.2',  letterSpacing: '0.02em',   fontWeight: '600' }],
        'label-sm':           ['0.75rem', { lineHeight: '1.2',  letterSpacing: '0.05em',   fontWeight: '600' }],
        'code-sm':            ['0.8125rem',{lineHeight: '1.4',  letterSpacing: '0.01em',   fontWeight: '500' }],
      },
      boxShadow: {
        'glow-primary':   '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-primary-lg': '0 0 24px -4px rgba(59, 130, 246, 0.35)',
        'glow-secondary': '0 0 40px rgba(139, 92, 246, 0.15)',
        'cta-blue':       '0 0 24px rgba(77, 142, 255, 0.45)',
        'card-depth':     '0 20px 40px -15px rgba(11, 15, 25, 0.9)',
        'glass-inset':    'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-cta':   'linear-gradient(135deg, #4d8eff 0%, #005ac2 50%, #571bc1 100%)',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float':     'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':       { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
