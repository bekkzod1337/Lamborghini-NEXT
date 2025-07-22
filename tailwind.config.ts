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
      },
    },
  },
  plugins: [
  ],
};

export default config;
