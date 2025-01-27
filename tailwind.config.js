/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        expressa: ['Expressa Serial Regular', 'serif'], // Add the custom font
        tilt_prism: ['"Tilt Prism"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
