/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        grey: "#18181b",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
};
