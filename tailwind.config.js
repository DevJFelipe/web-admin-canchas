/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist//*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        platypi: ['Platypi', 'sans-serif', ], // Agregamos la fuente 'Platypi'
        unbounded: ['Unbounded', 'sans-serif', ], // Agregamos la fuente 'Unbounded'
      },
    },
  },
  plugins: [],
}
