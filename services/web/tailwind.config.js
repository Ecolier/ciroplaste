import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      keyframes: {
        infiniteScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        }
      },
      animation: {
        marquee: 'infiniteScroll 480s linear infinite',
      }
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
  },
  plugins: [],
}

