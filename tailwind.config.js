/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        bg: "background-color",
        text: "color",
      },
      colors: {
        background: {
          light: "var(--color-bg-light)",
          dark: "var(--color-bg-dark)",
        },
        primaryColor: {
          light: "#e5e7eb", // light grey
          dark: "#1f2937", // dark grey
        },
        textColor: {
          light: "#1f2933", // dark grey
          dark: "#f3f4f6", // light grey
        },
        accentColor: {
          light: "#64748b", //soft blue-grey
          dark: "#94a3b8", // light blue-grey
        },
        borderColor: {
          light: "#d1d5db", // light
          dark: "#374151", // dark
        },
        btnColor: {
          light: "#2563eb", // dark blue
          dark: "#3b82f6", // light blue
        },
      },
    },
    variants: {
      extend: {
        fill: ["dark"],
      },
    },
  },
  plugins: [],
};
