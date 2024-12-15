/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#F5F5F5",
        secondary2: "#DB4444",
        button1: "#47B486"
      },
    },
  },
  plugins: [],
};
