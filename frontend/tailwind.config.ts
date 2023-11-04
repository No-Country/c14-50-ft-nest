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
        primary: '#0B8B9D',
        secondary: '#000000',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(11, 139, 157, 1)',
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
