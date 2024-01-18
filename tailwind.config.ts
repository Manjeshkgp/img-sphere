import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        "navbar":"-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset"
      },
      fontFamily:{
        "euclid_circular_b":["Euclid_Circular_B","sans-serif"],
        "helvetica_neue":["Helvetica Neue",'Helvetica']
      },
    },
  },
  plugins: [],
}
export default config
