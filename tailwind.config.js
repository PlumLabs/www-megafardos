/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        campo: {
          green: '#4a7c3f',
          'green-light': '#6ba85e',
          'green-dark': '#2d5a25',
          gold: '#d4a017',
          'gold-light': '#e8b830',
          earth: '#8B5E3C',
          'earth-light': '#a67c5a',
          sky: '#e8f0e4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'tractor-drive': {
          '0%': { left: '-20%' },
          '100%': { left: '120%' },
        },
        'tractor-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'wind': {
          '0%': { transform: 'translateX(0) skewX(0deg)' },
          '100%': { transform: 'translateX(100vw) skewX(-5deg)' },
        },
      },
      animation: {
        'tractor-drive': 'tractor-drive 8s linear infinite',
        'tractor-bounce': 'tractor-bounce 0.4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'wind': 'wind 4s linear infinite',
      },
    },
  },
  plugins: [],
}
