import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#605DEC",
          hover: "#1513A0",
          inactive: "#7C8DB0",
          destructive: "#EB5757",
        },
        secondary: {
          default: "transparent",
          hover: "#E9E8FC",
        },
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1312px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
