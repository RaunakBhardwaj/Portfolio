// import { defineConfig } from "tailwindcss";
/** @type {import('tailwindcss').config} */

import { Outfit } from "next/font/google";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheam: "#11001f",
      },
      fontFaimly: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
