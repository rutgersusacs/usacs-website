/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: require("tailwindcss/colors").gray,
      cream: "#F7F2E4",
      "usacs-red-light": "#A52A21",
      "usacs-red-dark": "#7B1915",
    },
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
