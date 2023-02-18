/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [
    'class'
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'marker': ['Permanent Marker', 'cursive']
      },
    },
  },
  plugins: [],
}
