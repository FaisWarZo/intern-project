/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blackground-black": "#14161F",
        "colorinput-black": "#282A3A"
      }
    }
  },
  plugins: []
}
