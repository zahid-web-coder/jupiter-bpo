import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#f97316",
          dark: "#c2410c",
          light: "#fff7ed",
          foreground: "#ffffff",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        slate: {
          950: "#020617",
        },
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(at 80% 20%, rgba(249,115,22,0.18) 0px, transparent 50%), radial-gradient(at 20% 80%, rgba(194,65,12,0.12) 0px, transparent 45%), linear-gradient(180deg, #fff7ed 0%, #ffffff 55%)",
        "brand-gradient": "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(194,65,12,0.08) 100%)",
        "hero-gradient": "linear-gradient(135deg, #fff7ed 0%, #ffedd5 45%, rgba(249,115,22,0.12) 100%)",
        "card-gradient": "linear-gradient(145deg, #ffffff 0%, #fff7ed 100%)",
        "dark-gradient": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "orange-gradient": "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
        "cta-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249,115,22,0.45) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(194,65,12,0.2) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(249,115,22,0.15) 0%, transparent 45%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2s linear infinite",
        "icon-pulse": "iconPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        iconPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(249, 115, 22, 0.08), 0 1px 4px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 16px 48px rgba(249, 115, 22, 0.2), 0 4px 12px rgba(15, 23, 42, 0.08)",
        glow: "0 0 40px rgba(249, 115, 22, 0.35)",
        "glow-lg": "0 0 60px rgba(249, 115, 22, 0.45), 0 0 120px rgba(194, 65, 12, 0.2)",
        "btn-primary": "0 4px 20px rgba(249, 115, 22, 0.45)",
        "btn-primary-hover": "0 8px 32px rgba(249, 115, 22, 0.55)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
