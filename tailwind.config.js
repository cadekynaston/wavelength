module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'indigo': {
        100: '#A7ACDF',
        200: '#555A8E',
        900: '#050937'
      },
      'blue': {
        500: '#5EC5F1'
      },
      'green': {
        500: '76BCBA',
        700: '#1D877D'
      },
      'gold': {
        400: '#F6BA3F',
        600: '#D69A20'
      },
      'tan': {
        50: '#F5F3EF',
        100: '#E3D6C0'
      },
      coral: {
        400: '#FF653E',
        600: '#D64621'
      },
      purple: {
        200: '#7E7185',
      },
      'white': '#fff',
      'pureblack': {
        0: '#000',
        40: '#999'
      }
    },
    extend: {
      spacing: {
        '600': '600px',
        '1200': '1200px',
      }
    },
  },
  plugins: [],
}
