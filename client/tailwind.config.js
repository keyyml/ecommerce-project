/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    './src/components/App.js',
    './src/components/NavBar.js',
    './src/components/Banner.js',
    './src/components/Cart.js',
    './src/components/Categories.js',
    './src/components/HairPage.js',
    './src/components/HomePage.js',
    './src/components/Login.js',
    './src/components/Logout.js',
    './src/components/MakeupPage.js',
    './src/components/NavBar.js',
    './src/components/ProductCard.js',
    './src/components/ProductPage.js',
    './src/components/Register.js',
    './src/components/Search.js',
    './src/components/SkinPage.js',
    './src/components/User.js',
],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        pinky: '#f8d3db',
        darkPinky: '#E474AF'
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
