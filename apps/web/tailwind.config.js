import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      chalk: {
        50: '#FAF8FC',
        100: '#F0EAF5',
        200: '#DBD1E5',
        300: '#BFB4CB',
        400: '#A699B2',
        500: '#8C7E9A',
        600: '#6E607B',
        700: '#594F64',
        800: '#473F50',
        900: '#2E2933',
        950: '#1A171C'
      },
      iris: {
        50: '#',
        100: '#',
        200: '#',
        300: '#',
        400: '#7964E5',
        500: '#5D46D0',
        600: '#4A34B9',
        700: '#392891',
        800: '#',
        900: '#',
        950: '#'
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-320px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-320px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        slideIn: 'slideIn .1s linear',
        slideOut: 'slideOut .1s linear',
        fadeIn: 'fadeIn .1s linear',
        fadeOut: 'fadeOut .1s linear',
      }
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Lora', 'serif'],
      symbols: ['Ciroplaste Symbols']
    },
  },
  plugins: [],
}

