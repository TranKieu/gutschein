const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        maicafe: '#e1d3b0',
        cafe: '#6b5651',
      },
      maxWidth: {
        nav: '1280px',
      },
      screens: {
        love: '975px',
      },
    },
  },
  plugins: [],
};
