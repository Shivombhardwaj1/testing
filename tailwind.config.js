/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
          purple:"#232F3E",
          orange:"#FAD02C"
        },
      },
    },
  },
  plugins: [],
};
