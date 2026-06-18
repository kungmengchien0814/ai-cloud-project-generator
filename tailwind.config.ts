import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        cloud: "#eef6ff",
        mint: "#2fbf9f",
        coral: "#f9735b",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 51, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
