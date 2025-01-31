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
        zoomEffect: 'zoomEffect 20s infinite alternate', // Zoom animation
        colorCycle: 'colorCycle 4s infinite', // Color cycling animation
      },
      keyframes: {
        zoomEffect: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        // Color cycling keyframe animation
        colorCycle: {
          '0%': { color: 'red' },
          '25%': { color: 'yellow' },
          '50%': { color: 'green' },
          '75%': { color: 'blue' },
          '100%': { color: 'red' },
        },
      },
    },
  },
  plugins: [],
};
