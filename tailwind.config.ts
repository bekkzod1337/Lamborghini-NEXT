import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lamborghini: ['var(--font-lamborghini)', 'sans-serif'],
      },
      colors: {
        primary: '#fcd12a',
        dark: '#000000',
        light: '#ffffff',
        gray: '#1a1a1a',
        muted: '#999999',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.25em',
      },
      lineHeight: {
        tight: '1.2',
        relaxed: '1.75',
      },
      boxShadow: {
        outlineYellow: '0 0 0 3px rgba(252, 209, 42, 0.5)',
        soft: '0 4px 12px rgba(0, 0, 0, 0.2)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'model-overlay': "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
      },
    },
  },
  plugins: [],
};

export default config;
