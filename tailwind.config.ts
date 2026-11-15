import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta provisional — se actualizará con la identidad visual de AgroPilot
        brand: {
          primary:   "#1B3A5C", // azul marino industrial
          secondary: "#2D7A3A", // verde agrícola
          accent:    "#F59E0B", // ámbar / advertencia
          dark:      "#0F1E30",
          light:     "#F4F7FA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
