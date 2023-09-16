import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: <any>{
      primary: "#FFC93E",
      secondary: "#111D5E",
      third: "#2563EB",
      fourth: "#F9FAFB",
      transparent: "transparent",
      fifth: "#ffffff",
      sixth: "#CDCDCD",
      seventh: "#617187",  // grey
    },
    screens: {
      mac: { max: "1536px" },
      desktop: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      mobile: { max: "500px" },
    },
  },
  plugins: [],
}
export default config
