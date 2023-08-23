/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#28e98c",
          secondary: "#999999"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

