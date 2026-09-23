import theme from './src/config/theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        cta: theme.colors.cta,
        alabaster: theme.colors.alabaster,
        black: theme.colors.black,
        white: theme.colors.white,
        muted: theme.colors.muted,
      },
      fontFamily: {
        display: theme.fonts.display,
        body: theme.fonts.body,
        mono: theme.fonts.mono,
        sans: theme.fonts.body,
      },
      borderRadius: theme.borderRadius,
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      boxShadow: {
        'card-hover': '0 20px 40px -15px rgba(30, 45, 66, 0.12), 0 0 0 1px rgba(252, 163, 17, 0.2)',
        'glow-cta': '0 10px 30px -5px rgba(252, 163, 17, 0.4)',
        'elevated': '0 12px 32px -8px rgba(17, 34, 59, 0.08)',
      },
    },
  },
  plugins: [],
};
