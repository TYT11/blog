module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      spacing: {
        fvh: "100vh",
        fvw: "100vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
