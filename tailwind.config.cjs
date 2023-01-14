/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#9F9F9F",
        dark: "#444",
      },
    },
  },
  plugins: [],
};
