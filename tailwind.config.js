/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontSize: {
      xs: '0.55rem',
      sm: '0.65rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '8rem',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      backgroundImage: {
        'vetor-hero-mobile': "url('/assets/images/background_slide.svg')",
      },
      colors: {
        'muve-principal': '#0550FC',
        'muve-verde': '#00FF96',
        'muve-white': '#FFFFFF',
        border: '#1a2e35',
        background: '#cecece',
      },
      animation: {
          'mover': 'move 4s linear infinite'

        
      },
      keyframes: {
          move: {
            '0%, 100%': {
              transform: 'translateX(50)'
            },
            '50%':{
              transform: 'translateX(0)'
            },
          },
      },
    },
  },
  variants: {},
  plugins: [],
  
};
