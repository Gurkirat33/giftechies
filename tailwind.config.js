/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "stripes-white":
          "linear-gradient(45deg, white 12.5%, transparent 12.5%, transparent 50%, white 50%, white 62.5%, transparent 62.5%, transparent 100%)",
        "grid-white":
          "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
        "dot-white": "radial-gradient(circle, #ffffff10 1px, transparent 1px)",
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        stripes: "5px 5px",
      },
      colors: {
        primary: {
          100: "#e5e5e5",
          200: "#b3b3b3",
          300: "#808080",
          400: "#4d4d4d",
          500: "#141414",
          600: "#0f0f0f",
          700: "#0a0a0a",
          800: "#050505",
          900: "#000000",
        },
        secondary: {
          100: "#F5F3E6",
          200: "#ECE9D0",
          300: "#E2DFAF",
          400: "#D9D69A",
          500: "#D5CEA3",
          600: "#C1BA87",
          700: "#9F9970",
          800: "#7F785B",
          900: "#5C5540",
        },
        tertiary: {
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#1E1A78",
        },
        border: "#3B3C3E",
      },
    },
  },
  plugins: [],
};
