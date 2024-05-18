/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#151515",
          200: "rgba(0, 0, 0, 0.4)",
        },
        tittle: "#fff",
        description: "#c8c8c8",
        darkslategray: "#363636",
        sandybrown: {
          100: "#e89e3f",
          200: "rgba(232, 158, 63, 0.1)",
        },
        peru: {
          100: "#b56b0d",
          200: "rgba(181, 107, 13, 0.1)",
        },
        "light-grayscale-30": "#474747",
        "light-grayscale-50": "#777",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "basic-text-sm-medium": "Inter",
      },
      borderRadius: {
        xl: "20px",
        sm: "14px",
        "20xl": "39px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "3xs": "10px",
      xs: "12px",
      lg: "18px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      "7xl": "26px",
      "2xl": "21px",
      "13xl": "32px",
      lgi: "19px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
