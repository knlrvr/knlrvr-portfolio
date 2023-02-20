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
      backgroundImage: {
        'hero': "url('')",
        'hero-two': "url('')",
      },
    },
  },
  plugins: [],
}
