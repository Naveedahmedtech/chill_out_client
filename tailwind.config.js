/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        bgWhite: "var(--color-bg-white)",
        bgDark: "var(--color-dark-background)",
        buttonBg: "var(--color-button-text)",
        buttonText: "var(--color-button-bg)",
        linkActive: "var(--color-link-active)",
        danger: "var(--color-error)",
      },
    },
  },
  plugins: [],
};
