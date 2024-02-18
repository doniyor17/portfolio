/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverBox: '#162340',
        main: '#0F172A',
        fontCol: '#D1DBED',
        fontDark: '#5A6980'
      }
    },
  },
  plugins: [],
}

