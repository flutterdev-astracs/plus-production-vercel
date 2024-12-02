import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["var(--font-proxima-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightPurple:"#B49DBD",
        plum:"#431A40",
        darkBlue:"#04182E",     

      },
      backgroundImage:{
        "navLinear": "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0.08) 84.4%, rgba(255, 255, 255, 0.08) 137.15%)",
        "overlay":"linear-gradient(270deg, rgba(255, 255, 255, 0) -8.83%, rgba(255, 255, 255, 0) 18.4%, rgba(255, 255, 255, 0) 34.34%, rgba(0, 0, 0, 0.3) 65.94%, rgba(0, 0, 0, 0.5) 78.73%, rgba(0, 0, 0, 0.7) 93.93%, #000000 120.39%)",   

      },
    },
  },
  plugins: [],
};
export default config;
