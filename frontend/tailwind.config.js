/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#3E6B7B",
        secondary: {
          DEFAULT: "#71C4E1",
          75: "#A1D7EB",
          50: "#CBE9F5",
        },
        tertiary: {
          DEFAULT: "#FF6B5A",
          75: "#FF9284",
        },
        white: {
          DEFAULT: "#FFFFFF",
          60: "#999999",
        },
        gray: {
          DEFAULT: "#555555",
          10: "#707070",
          5: "#3B3B3B",
        }
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #3E6B7B 0%, #71C4E1 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
