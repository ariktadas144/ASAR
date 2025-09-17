/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#242424",     // background
        primary: "#646cff", // violet
        accent: "#535bf2",  // lighter violet
      },
      boxShadow: {
        glow: "0 0 10px rgba(100, 108, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
