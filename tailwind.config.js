/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        grey: "#18181b",
        charcoal: "#101820",
        bright_yellow: "#FEE715",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
      oswald: ["Oswald, sans-serif"],
    },
  },
  plugins: [],
};
