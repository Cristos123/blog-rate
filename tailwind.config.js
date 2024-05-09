/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Jost", "Karla", "ui-sans-serif", "system-ui"],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
      inter: ["Inter", "ui-sans-serif", "system-ui"],
      jost: ["Jost", "ui-sans-serif", "system-ui"],
      karla: ["Karla", "ui-sans-serif", "system-ui"],
      Rubik: ["Rubik", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
