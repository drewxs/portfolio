/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "all",
  content: ["./src/**/*.{rs,html,css}", "./dist/**/*.html"],
  theme: {
    fontFamily: {
      display: ["Source Code Pro", "monospace"],
      body: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [],
};
