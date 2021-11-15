const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        light: '#ffe2cc',
        DEFAULT: '#ff7d1a',
        pale: '#ffede0',
      },
      mainBgColor: {
        DEFAULT: 'brown',
      },
      blue: {
        darkest: '#1d2025',
        darkGrayish: '#68707d',
        grayish: '#b6bcc8',
        light: '#f7f8fd',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.content-before': {
          content: 'attr(data-before)',
        },
        '.content-after': {
          content: 'attr(data-after)',
        },
      };

      addUtilities(contentUtilities, ['before', 'after']);
    }),
  ],
};
