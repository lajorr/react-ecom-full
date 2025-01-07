/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#F5F5F5",
        secondary2: "#DB4444",
        button1: "#47B486",
      },
      backgroundImage: {
        ps5: "url('./src/assets/images/ps5.png')",
      },
      animation: {
        text: "text 3.5s ease infinite",
        load: "load 3.5s ease infinite",
        load2: "load2 3.5s ease infinite",
      },

      keyframes: {
        text: {
          "0%": { letterSpacing: "1px", transform: "translateX(0px)" },
          "40%": { letterSpacing: "2px", transform: "translateX(26px)" },
          "80%": { letterSpacing: "1px", transform: "translateX(32px)" },
          "90%": { letterSpacing: "2px", transform: "translateX(0px)" },
          "100%": { letterSpacing: "1px", transform: "translateX(0px)" },
        },
        load: {
          "0%": { width: "16px", transform: "translateX(0px)" },
          "40%": { width: "100%", transform: "translateX(0px)" },
          "80%": { width: "16px", transform: "translateX(64px)" },
          "90%": { width: "100%", transform: "translateX(0px)" },
          "100%": { width: "16px", transform: "translateX(0px)" },
        },
        load2: {
          "0%": { transform: "translateX(0px)", width: "16px" },
          "40%": { transform: "translateX(0%)", width: "80%" },
          "80%": { width: "100%", transform: "translateX(0px)" },
          "90%": { width: "80%", transform: "translateX(15px)" },
          "100%": { transform: "translateX(0px)", width: "16px" },
        },
      },
    },
  },
  plugins: [],
};
