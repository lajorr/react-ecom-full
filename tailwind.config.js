/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: { 100: "#F5F5F5", 200: "#DB4444" },
      },
    },
  },
  plugins: [],
};
