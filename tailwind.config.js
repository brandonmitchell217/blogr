/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      overpass: ["Overpass"],
      Ubuntu: ["Ubuntu"],
    },
    extend: {
      colors: {
        redBtn: "hsl(356, 100%, 66%)",
        redBtnHvr: "hsl(355, 100%, 74%)",
        heading: "hsl(208, 49%, 24%)",
        white: "hsl(0, 0%, 100%)",
        primary: "hsl(207, 13%, 34%)",
        footText: "hsl(240, 2%, 79%)",
        footBg: "hsl(240, 10%, 16%)",
        heroGradientRed1: "hsl(13, 100%, 72%)",
        heroGradientRed2: "hsl(353, 100%, 62%)",
        bodyGradientBlue1: "hsl(237, 17%, 21%)",
        bodyGradientBlue2: "hsl(237, 23%, 32%)",
      },
    },
  },
  plugins: [],
};
