/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      display: 'var(--display-font)',
      body: 'var(--body-font)',
    },
    extend: {
      colors: {
        bgDark: 'rgb(0,0,0)',
        bgLight: 'rgb(250,250,250)',
        centerBgDark: 'rgb(24,24,27)',
        centerBgLight: 'rgb(255,255,255)',
        lightGray: 'rgb(37,37,41)',
        headerDark: 'rgb(244,244,245)',
        headerLight: 'rgb(39,39,42)',
        otherText: 'rgb(72,72,77)',
        seaGreen: 'rgb(20,184,166)',
      },
      padding: {
        '100px': '100px',
      },
      dropShadow: {
        '3xl': '1em 1em 1em rgba(16, 26, 28)',
        '4xl': '.25em .25em 1em rgba(108, 111, 112)',
      },
      height: {
        '128': '560px',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
