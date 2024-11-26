import defaultTheme from "tailwindcss/defaultTheme";
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: colors.zinc,
      },
      fontFamily: {
        mono: ["Jetbrains Mono", ...defaultTheme.fontFamily.mono],
        display: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
