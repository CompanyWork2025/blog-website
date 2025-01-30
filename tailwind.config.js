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
      animation: {
        zoomEffect: 'zoomEffect 20s infinite alternate', // Add the custom animation
      },
      keyframes: {
        zoomEffect: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
