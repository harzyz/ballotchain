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
        primary: "#002D62",
        priBg: "#FCF7FF",
        titleText: "#212121",
        priText: "#757575",
        secondary: "#01BE63"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      fontSize: {
        nl: ["56px", "64px"],
      },
      screens: {
        "2xs": "200px",
        "1xs": "350px",
        "1xl": "1400px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
export default config;
