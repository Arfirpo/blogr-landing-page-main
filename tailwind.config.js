/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        Overpass: ["Overpass", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        lightRed: "hsl(356, 100%, 66%)", //CTA text
        veryLightRed: "hsl(355, 100%, 74%)", //CTA hover background
        veryDarkBlue: "hsl(208, 49%, 24%)", //Headings
        White: "hsl(0, 0%, 100%)", //Text
        grayishBlue: "hsl(240, 2%, 79%)", //footer text
        veryDarkGrayishBlue: "hsl(207, 13%, 34%)", //body copy
        verydarBlackBlue: "hsl(240, 10%, 16%)", //footer background
        veryLightRedGradient: "hsl(13, 100%, 72%)", //Intro/CTA Mobile nav
        lightRedGradient: "hsl(353, 100%, 62%)", //Intro/CTA Mobile nav
        veryDarkGrayBlue: "hsl(237, 17%, 21%)", //Background Gradient
        veryDarkDesaturatedBlue: "hsl(237, 23%, 32%)", // Background Gradient
      },
    },
  },
  plugins: [],
};
