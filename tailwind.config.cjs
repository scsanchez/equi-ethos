/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vibes: ["Vibes", "sans-serif"],
        lato: ['Lato', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#000001', // Reemplaza con tu color primario
        secondary: '#50C878', // Reemplaza con tu color secundario
        tertiary: '#FF6600', // Reemplaza con tu color terciario
      },
    },
  },

  themes: ["dark", "light"],
  plugins: [require("daisyui")],
};
