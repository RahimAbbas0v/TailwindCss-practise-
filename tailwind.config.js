/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",
      },
      spacing: {
        128: "84.5vh",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://mrwallpaper.com/images/hd/batman-the-dark-knight-rises-4k-jwuxwi1azm1ww3er.jpg')",
      },
    },
  },
  plugins: [],
};
