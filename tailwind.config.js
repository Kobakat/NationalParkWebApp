// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        rows: "250px minmax(250px, 1fr)",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        columns: "250px minmax(250px, 1fr) 250px",
      },
      colors: {
        rocky: "#743100",
        lightrocky: "#9B5933",
        sandRock: "#B0864F",
        dustBunnyGreen: "#6A775F",
        grass: "#545700",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
