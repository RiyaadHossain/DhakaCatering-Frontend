/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}
