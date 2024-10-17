/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist//*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        platypi: ['Platypi', 'sans-serif'], // Fuente existente 'Platypi'
        unbounded: ['Unbounded', 'sans-serif'], // Fuente existente 'Unbounded'
        fuzzy: ['"Fuzzy Bubbles"', 'cursive'], // Nueva fuente 'Fuzzy Bubbles'
      },
      fontSize: {
        '3.5xl': '1.875rem', // Nuevo tamaño de texto '3.5xl'
        '4.5xl': '2.5rem',    // Nuevo tamaño de texto '4.5xl'
      },
    },
  },
  plugins: [],
}
