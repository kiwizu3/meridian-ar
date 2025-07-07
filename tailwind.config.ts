const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1280px',
          lg: '944px',
        },
      },
      colors: {
        lightBlue: '#61CAE6',
        blue: '#0B466E',
        cardBlue: '#0A3D5F',
        darkBlue: '#06253A',
        black: '#1C1C1C',
        plainBlack: '#020D14',
        white: '#FFF',
        green: '#97CA3C',
        orange: '#F26722',
        pink: '#F1557A',
        white1: '#F3F3F3',
        red: '#D92028',
        gary: '#E5E5E5',
        gray1: '#E6E6E6',
        gray50: '#EAEAEA',
        lightGreen: '#8EFFA0',
        lightBlack: '#23232A',
        grayAsh: '#8B8B8B',
        themeGreen: '#0E3A2F',
        cardGreen: '#17634F',
        greeen2 : '#124C3D',
        themeYellow: '#EDB143',
        yellow : '#DBB226 ',
        gold: '#D9CA95',
        
      },
    },
    fontFamily: {
      primary: 'nexa',
      secondary: 'helvetica',
      notoSinhala: 'NotoSansSinhala',
      notoTamil: 'NotoSansTamil',
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
