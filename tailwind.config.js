/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {

    extend: {
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: "#0E7490", // لون الهوية
        secondary: "#E0F2FE", // لون فاتح
        dark: "#1E293B", // للنصوص الداكنة
      },

    },
  },
  plugins: [],
}

