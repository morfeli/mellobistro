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
        overLay: "rgba(0, 0, 0, 0.3)",
      },

      fontFamily: {
        Author: ["Author", "sans-serif"],
      },
      backgroundImage: {
        "hero-1": "url('../public/assets/example1.jpg')",
        "hero-2": "url('../public/assets/example2.jpg')",
        "hero-3": "url('../public/assets/example3.jpg')",
        "hero-4": "url('../public/assets/example4.jpg')",
        "hero-5": "url('../public/assets/example5.jpg')",
        wallpaper:
          "url('https://images.getbento.com/accounts/b5f739004e05ee3ac67ce4a9d6d5e4c0/media/images/8499234319clean-gray-paper.png')",
      },

      width: {
        "25vw": "25vw",
        "40vw": "40vw",
        "50vw": "45vw",
      },
      height: {
        "30vh": "30vh",
      },
      animation: {
        slide: "slide 20s infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            backgroundImage: "url('../public/assets/example1.jpg')",
          },
          "25%": {
            backgroundImage: "url('../public/assets/example2.jpg')",
          },
          "50%": {
            backgroundImage: "url('../public/assets/example3.jpg')",
          },
          "75%": {
            backgroundImage: "url('../public/assets/example4.jpg')",
          },
          "100%": {
            backgroundImage: "url('../public/assets/example5.jpg')",
          },
        },
      },
      gridTemplateColumns: {
        imageGrid: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      screens: {
        "grid-500": "500px",
      },
    },
  },
  plugins: [],
};
