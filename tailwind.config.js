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
      backgroundImage: {
        wallpaper:
          "url('https://images.getbento.com/accounts/b5f739004e05ee3ac67ce4a9d6d5e4c0/media/images/8499234319clean-gray-paper.png')",
      },
    },
  },
  plugins: [],
};
