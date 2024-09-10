/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        bg: "background",
        text: "color",
        fill: "fill",
        stroke: "stroke",
        border: "border-color",
      },
      transitionDuration: {
        bg: "1000ms",
        text: "1000ms",
      },
      colors: {
        background: {
          light: "var(--color-bg-light)",
          dark: "var(--color-bg-dark)",
        },
        primary: {
          light: "#E0E2E4", // light grey
          gradientLight: "#C6C8CA",
          dark: "#26292B", // dark grey
          gradientDark: "#3C4348",
        },
        secondary: {
          light: "#F3F4F6", // lighter tone for gradient
          dark: "#2E3239", // dark tone for gradient
        },
        accent: {
          light: "#4472CA", // dark grey
          dark: "#5F7ADB", // light grey
        },
        subtle: {
          light: "#ADC6FF", //soft blue-grey
          dark: "#A2B2EE", // light blue-grey
        },
        icon: {
          light: "#000000",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};

// bg and text
// bg-primary-light text-black dark:bg-primary-dark dark:text-white

// border
// border-subtle-light dark:border-subtle-dark

// shadow
// shadow-accent-light dark:shadow-accent-dark

// btn
// bg-subtle-light dark:bg-subtle-dark text-black dark:text-light border-accent-light dark:border-accent-dark

// gradient
// bg-gradient-to-r from-primary-light to-primary-gradientLight dark:bg-gradient-to-r dark:from-primary-dark dark:to-primary-gradientDark
