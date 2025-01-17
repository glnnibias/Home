module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4ade80',
          DEFAULT: '#22c55e',
          dark: '#16a34a',
        },
        secondary: {
          light: '#86efac',
          DEFAULT: '#4ade80',
          dark: '#22c55e',
        },
        background: '#f0fdf4',
        text: {
          DEFAULT: '#1e293b',
          light: '#475569',
        },
      },
    },
  },
  plugins: [],
}