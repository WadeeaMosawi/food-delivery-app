/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF5722", // deep orange (appetizing + friendly)
        white: {
          DEFAULT: "#ffffff",
          100: "#FDFDFD",
          200: "#FFFAF5", // subtle warm off-white
        },
        gray: {
          100: "#9E9E9E", // softer gray for text
          200: "#616161", // darker gray for contrast
        },
        dark: {
          100: "#1C1C1E", // modern deep background (iOS style dark)
        },
        error: "#E53935", // red for error (close to food/red sauces 🍅)
        success: "#43A047", // fresh green (like avocado or salad 🥗)
      },
      fontFamily: {
        quicksand: ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
