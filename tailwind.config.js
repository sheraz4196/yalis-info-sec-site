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
        primary: {
          light: "rgb(228, 16, 44)",
          DEFAULT: "#b60d23",
          dark: "#e4102c",
        },
        secondary: "rgb(27, 161, 230)",
        light: "rgb(250,250,250)",
        "link-hover": "#b60d23",
        "muted-red": "#ef1532",
        "muted-brown": "#31373c",
        blue: "#1ba1e6",
        gold: "#ffd700",
        "sea-blue": "#93ABBB",
        "gray-medium": "#bcbcbc",
        "gray-primary-dark": "#7d909c",
        "gray-light": "#8e9fa9",
        "gray-cement": "#a2b7c5",
        "half-black": "rgba(34,39,42,1)",
        "brown-40": "#434343",
        "slate-40": "#324450",
      },
    },
  },
  plugins: [],
  purge: {
    mode: "all",
    preserveHtmlElements: false
  },
};
