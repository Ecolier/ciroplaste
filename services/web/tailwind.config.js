import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
  },
  plugins: [],
}

