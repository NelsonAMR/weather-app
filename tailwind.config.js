/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E213A",
        secondary: "#100E1D",
        text1: "#E7E7EB",
        text2: "#A09FB1",
      },
      backgroundImage: {
        "weather-home": "url('./assets/Cloud-background.png')",
      },
    },
  },
  plugins: [],
};
