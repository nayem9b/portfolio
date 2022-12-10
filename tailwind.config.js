/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea9438",

          secondary: "#8710ba",

          accent: "#53ed2d",

          neutral: "#1E1623",

          "base-100": "#000000",

          info: "#3AB7E4",

          success: "#48E5C5",

          warning: "#FBC932",

          error: "#F9766C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
