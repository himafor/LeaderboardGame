/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ["Didact Gothic", "sans-serif"],
      },
      colors: {
        dark: "#1D2125",
        darkblue: "#232D3F",
      },
    },
  },
  plugins: [],
}

