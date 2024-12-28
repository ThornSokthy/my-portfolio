/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 20px rgb(12, 193, 12)",
      },
      content: {
        empty: '""',
      },
    },
  },
  plugins: [],
};
