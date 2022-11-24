/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#64849b',
      'secondary-left': '#9B6484',
      'secondary-right': {
        100: '#5c6c46',
        200: '#697c50',
        300: '#768b5a',
        400: '#849b64'
      }
    },
    minWidth: {
      '1/2': '50%'
    },
    extend: {
      spacing: {
        '1/8': '12%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
