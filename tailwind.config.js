module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#C40B13',
          secondary: '#DADDDF',
          accent: '#621295',
          neutral: '#F69314',
          // info: '#F69314',
          // 'base-100': '#ffffff',
          // info: '#0000ff',
          // success: '#00ff00',
          // warning: '#00ff00',
          // error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
