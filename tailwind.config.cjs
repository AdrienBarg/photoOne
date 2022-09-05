/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#021926",
        primaryLow: "rgba(2, 25, 38, 0.80)",
        secondary: "#002e3c",
        tertiary: "#013747",
        accent: "#ff7a01",
        dimWhite: "rgba(255, 255, 255, 0.88)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        mainOrange: "#ff7a01",
        secondaryHidden: "rgba(0, 46, 60, 0)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },
      dropShadow: {
        '3xl': '0 10px 20px rgba(0, 0, 0, 0.75)',
        'follow': '0 10px 10px rgba(0, 0, 0, 0.35)',
        'p': '0 10px 5px rgba(0, 0, 0, 0.75)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};