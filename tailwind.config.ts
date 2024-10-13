import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '120': '1.20', // Definizione della scala personalizzata
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        // Aggiungi una nuova media query
       'max-md': { 'max': '768px' },
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'], // Abilitare la variante hover per scale
    },
  },
  plugins: [],
};

export default config;
