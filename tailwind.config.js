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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
