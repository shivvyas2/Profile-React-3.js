/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d0d0d",
        secondary: "#5CB8E4",
        tertiary: "#133360",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'custom-gradient': 'linear-gradient(180deg, rgba(74, 144, 226, 1) 0%, rgba(74, 144, 226, 0.7) 50%, rgba(74, 144, 226, 0) 100%)',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.jpg')",
        'custom-gradient': 'linear-gradient(180deg, rgba(74, 144, 226, 1) 0%, rgba(74, 144, 226, 0.7) 50%, rgba(74, 144, 226, 0) 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)',
      },
    },
  },
  plugins: [],
};
