/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", 
        white: {
          DEFAULT: "#ffffff",
          100: "#f9fafb",
          200: "#2563EB", 
        },
        gray: {
          100: "#9CA3AF",
          200: "#6B7280",
        },
        dark: {
          100: "#111827",
        },
        error: "#EF4444",  
        success: "#10B981", 
        accent: "#14B8A6",  
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
}
