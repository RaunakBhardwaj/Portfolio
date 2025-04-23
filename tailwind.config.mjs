// import { defineConfig } from "tailwindcss";
/** @type {import('tailwindcss').config} */

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode based on the presence of a 'dark' class
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheam: "#11001f",
      },
    },
  },
  plugins: [],
};
