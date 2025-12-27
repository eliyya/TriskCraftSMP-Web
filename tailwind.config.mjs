/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dsblue: "#5865F2",
        triskyellow: "#ffd071",
        colorsecundaro: "#21618c",
      },
    },
  },
  plugins: [],
};
