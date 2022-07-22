module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
  variants: {
    extend: {
    }
  },
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        '1/2':'50%'
      },
      inset:{
        '1/10':'10%'
      },
      minHeight:{
        // 'min': '10rem'
      },
      maxHeight:{
        // 'max': 'max-content'
      }
    },
   
  },
}
