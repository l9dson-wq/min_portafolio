/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    fontFamily: {
      sans: ['Gabarito, sans-serif']
    },
    extend: {
      colors: {
        bg_light_navbar: "#F4EDE4",
        bg_light_body: "#F0E7DB",
        bg_dark: "#202023",
        bg_moon: "#C0ADEA",
        bg_hover_button: "#323235",
        bg_light_hover_button: "#EDF2F7",
        bg_button_border: "#525255",
        bg_message: "#313134",
      },
      maxWidth: {
        body: "540px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  darkMode: "class",
};
