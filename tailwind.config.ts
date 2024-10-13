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
