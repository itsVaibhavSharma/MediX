/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#6D28D9", // Purple
          secondary: "#10B981", // Emerald
          dark: {
            100: "#1F2937", // Lighter background
            200: "#111827", // Darker background
            300: "#0F172A", // Darkest background
          },
          accent: "#F59E0B", // Amber
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        animation: {
          pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
      },
    },
    plugins: [],
    darkMode: "class",
  };