module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "#ffd145",
        "background-dark": "#253340",
        primary: "#ffc000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
