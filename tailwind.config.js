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
        brand: {
          green: '#1B4332',
          'green-light': '#40916C',
          'green-mid': '#2D6A4F',
          gold: '#D4A017',
          'gold-light': '#E9C46A',
          earth: '#8B5E3C',
          'earth-light': '#C2A384',
          cream: '#FCFCF9',
          beige: '#F5F2EB',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-8px) translateX(4px)' },
          '66%': { transform: 'translateY(4px) translateX(-4px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'shimmer-slide': {
          to: { transform: 'translate(calc(100cqw - 100%), 0)' },
        },
        'spin-around': {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' },
        },
        'shiny-text': {
          '0%, 90%, 100%': { backgroundPosition: 'calc(-100% - var(--shiny-width)) 0' },
          '30%, 60%': { backgroundPosition: 'calc(100% + var(--shiny-width)) 0' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-left': 'slide-left 0.7s ease-out forwards',
        'slide-right': 'slide-right 0.7s ease-out forwards',
        'drift': 'drift 6s ease-in-out infinite',
        marquee: 'marquee var(--duration, 40s) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration, 40s) linear infinite',
        'shimmer-slide': 'shimmer-slide var(--speed, 3s) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed, 5s) * 2) infinite linear',
        'shiny-text': 'shiny-text 8s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
