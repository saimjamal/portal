/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ccd0de",
          200: "#99a2bd",
          300: "#66739b",
          400: "#33457a",
          500: "#001659",
          600: "#001247",
          700: "#000d35",
          800: "#000924",
          900: "#000412",
        },
        secondary: {
          100: "#ffdfd0",
          200: "#ffbfa1",
          300: "#ff9e72",
          400: "#ff7e43",
          500: "#ff5e14",
          600: "#cc4b10",
          700: "#99380c",
          800: "#662608",
          900: "#331304",
        },
      },
    },
  },
  plugins: [],
};
