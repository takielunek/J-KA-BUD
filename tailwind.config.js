/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#f7f6ec",
        navy: "#273a3f",
        navy2: "#3e5a62",
        navyHover: "#32474d",
        green: "#8bc34c",
        greenHover: "#7CB342",
        grey: "#b4b3b1",
        bgGrey: "#eee",
        white: "#ffffff",
        whiteHover: "#f0f0f0",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xxs: "350px",
      xs: "500px",
      ss: "580px",
      sm: "768px",
      md: "993px",
      lg: "1100px",
      xl: "1200px",
      xxl: "1500px",
    },
  },
  plugins: [],
};
