const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#C0392B',
          50: '#F9E4E2',
          100: '#F2C9C4',
          200: '#E6948A',
          300: '#DB5F50',
          400: '#C0392B',
          500: '#A32E22',
          600: '#86241B',
          700: '#691B14',
          800: '#4C130E',
          900: '#2E0B08',
        },
        secondary: {
          DEFAULT: '#1ABC9C',
          50: '#E8F8F5',
          100: '#D1F2EB',
          200: '#A3E4D7',
          300: '#76D7C4',
          400: '#48C9B0',
          500: '#1ABC9C',
          600: '#17A589',
          700: '#148F77',
          800: '#117A65',
          900: '#0E6655',
        },
        surface: {
          DEFAULT: '#141414',
          light: '#FFFFFF',
          dark: '#0A0A0A',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};