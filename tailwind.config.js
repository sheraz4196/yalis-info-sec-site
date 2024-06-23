/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b60d23",
        "primary-rgb": "rgb(228, 16, 44)",
        primary2: "#e4102c",
        secondary: "rgb(27, 161, 230)",
        light: "rgb(250,250,250)",
        "link-hover": "#b60d23",
        blue: "#1ba1e6",
        gold: "#ffd700",
      },
    },
  },
  plugins: [],
  purge: {
    mode: "all",
    preserveHtmlElements: false,
  },
};
