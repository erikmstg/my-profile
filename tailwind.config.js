// const { plugin } = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Source Sans Pro, ui-sans-serif",
        mono: "IBM Plex Mono, ui-monospace",
      },
      colors: {
        yellow: {
          50: "#FFFDEB",
          100: "#FEFAD7",
          200: "#FEF5AA",
          300: "#FDF181",
          400: "#FDEC59",
          500: "#FCE72D",
          600: "#ECD503",
          700: "#B09F02",
          800: "#746802",
          900: "#3C3601",
        },
        gray: {
          background: "#F7F7FB",
          line: "#E8E8FB",
          field: "#BFBFE3",
        },
      },
    },
  },
  plugins: [
    function plugin({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)",
        },
      };
      addUtilities(utilities);
    },
  ],
};
