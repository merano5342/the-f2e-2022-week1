/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')


module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  theme: {
    fontWeight: {
      regular: 400,
      bold: 600,
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '5xl': '3rem',
    },

    colors: {
      'black': '#000000',
      'white': '#ffffff',

      'purple': '#6029F5',
      'yellow': '#E4BD46',
      'cyan': '#79EAEE',

      'red': '#EA5727',
      'pink': '#F3A7AC'
    },
    screens: {
      // 'sm': { 'max': '576px' },
      // => @media (min-width: 375px) { ... }
      'md': '375px',
      'lg': '768px',

    },

  },

  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        'h1': {
          fontSize: '30px',
        },
        'h2': {
          fontSize: '24px',
          textAlign: 'center',
          fontWeight: '600'
        },
        'h3': {
          fontSize: '20px',
          textAlign: 'center',
        },
        'h4': {
          fontSize: '16px',
        },
        'h5': {
          fontSize: '14px',
        },
        'p': {
          fontSize: '20px',
        },
      }),
        addComponents({
          '.btn': {
            backgroundColor: theme('colors.purple'),
            color: theme('colors.white'),
            padding: '10px 26px',
            borderRadius: '100px',
          }
        })
    })
  ],
}
