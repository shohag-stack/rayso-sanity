import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: "#7BFF00",
        "acid-dim": "var(--acid-dim)",
        "acid-border": "var(--acid-border)",
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        "bg-4": "var(--bg-4)",
        surface: "var(--surface)",
        border: "var(--border-color)",
        "border-h": "var(--border-h)",
        muted: "var(--muted)",
        mid: "var(--mid)",
        "text-primary": "var(--text-primary)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-mono)", "monospace"],
        serif: ["var(--font-instrument)", "serif"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "pulse-border": "pulse-border 2.5s ease-in-out infinite",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        'gradient-move': 'gradientMove 8s ease infinite',
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-border": {
          "0%, 100%": { borderColor: "rgba(123,255,0,0.22)" },
          "50%": { borderColor: "rgba(123,255,0,0.6)" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "49%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
