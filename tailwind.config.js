module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "#f8f3ed",
        logo: "#F87171",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
