/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#FFF1E6",
        "eerie-black": "#252422",
        "hunter-green": "#3A5A40",
        "orange-eng": "#BF0603",
        "equestrian-green": "#556450",
      },
    },
  },
  plugins: [],
};
