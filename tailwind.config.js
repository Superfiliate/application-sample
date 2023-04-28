/* eslint-disable global-require, @typescript-eslint/no-var-requires */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        wiggle: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
      borderWidth: {
        1: "1.5px",
      },
      borderRadius: {
        "4xl": "32px",
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#191919",
          400: "#0D0D0D",
          500: "#000000",
        },
        secondary: {
          DEFAULT: "#292929",
          100: "#EBEBEB",
          200: "#D6D6D6",
          300: "#666666",
          400: "#3D3D3D",
          500: "#292929",
        },
        link: "#0062F5",
        gray: {
          DEFAULT: "#D0D0D0",
          50: "#F5F5F5",
          100: "#EAEAEA",
          200: "#D0D0D0",
          300: "#BABABA",
          400: "#9E9E9E",
          500: "#8F8F8F",
          600: "#666666",
          700: "#454545",
          800: "#2E2E2E",
          900: "#191919",
        },
        danger: {
          DEFAULT: "#F03F33",
          100: "#FEEDEC",
          200: "#F8A6A0",
          300: "#F03F33",
          400: "#BE1A0E",
          500: "#720F09",
        },
        warning: {
          DEFAULT: "#FB9F14",
          100: "#FFF7EB",
          200: "#FDD69B",
          300: "#FB9F14",
          400: "#C97A03",
          500: "#784902",
        },
        success: {
          DEFAULT: "#12B76A",
          100: "#ECFDF5",
          200: "#B5F8D8",
          300: "#12B76A",
          400: "#0C7946",
          500: "#074A2B",
        },
        info: {
          DEFAULT: "#2E90FA",
          100: "#EBF4FF",
          200: "#9BCAFD",
          300: "#2E90FA",
          400: "#0562C7",
          500: "#033B78",
        },
        orange: {
          DEFAULT: "#7A1600",
          100: "#FFEEEB",
          200: "#FFAC99",
          300: "#FF370A",
          400: "#CC2500",
          500: "#7A1600",
        },
        cream: {
          DEFAULT: "#694E3B",
          100: "#F8F4F2",
          200: "#E8DED6",
          300: "#CCB5A4",
          400: "#9D7558",
          500: "#694E3B",
        },
        violet: {
          DEFAULT: "#060377",
          100: "#ECEBFE",
          200: "#C5C3FD",
          300: "#6D6AFB",
          400: "#0906C6",
          500: "#060377",
        },
        pink: {
          DEFAULT: "#720836",
          100: "#FEECF4",
          200: "#FAB3D2",
          300: "#F13B8A",
          400: "#BE0E5A",
          500: "#720836",
        },
      },
      fontSize: {
        /* Size - 10px */
        "2xs": [
          "0.625rem",
          {
            lineHeight: "0.875rem",
            letterSpacing: "1",
          },
        ],
        /* Size - 12px */
        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "1",
          },
        ],
        /* Size - 14px */
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "1",
          },
        ],
        /* Size - 16px */
        base: [
          "1rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "1",
          },
        ],
        /* Size - 18px */
        lg: [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            letterSpacing: "-2px",
          },
        ],
        /* Size - 22px */
        xl: [
          "1.375rem",
          {
            lineHeight: "1.875rem",
            letterSpacing: "-2px",
          },
        ],
        /* Size - 26px */
        "2xl": [
          "1.625rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-3px",
          },
        ],
        /* Size - 30px */
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.625rem",
            letterSpacing: "0px",
          },
        ],
        /* Size - 32px */
        "4xl": [
          "2rem",
          {
            lineHeight: "2.375rem",
            letterSpacing: "-4px",
          },
        ],
        /* Size - 36px */
        "5xl": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-4px",
          },
        ],
        /* Size - 40px */
        "6xl": [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-4px",
          },
        ],
        /* Size - 44px */
        "7xl": [
          "2.75rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "-4px",
          },
        ],
        /* Size - 56px */
        "8xl": [
          "3.5rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "-4px",
          },
        ],
        /* Size - 64px */
        "9xl": [
          "4rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "-4px",
          },
        ],
      },
      fontFamily: {
        display: ["GoodSans", ...defaultTheme.fontFamily.sans],
        header: ["GoodSans", ...defaultTheme.fontFamily.sans],
        body: ["Oxygen", ...defaultTheme.fontFamily.sans],
        // The "sans" key is used as the default by Tailwind
        sans: ["Oxygen", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
