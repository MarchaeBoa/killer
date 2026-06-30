import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D3FE6",
          hover: "#1733C4",
          soft: "#EEF2FF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          tint: "#F5F7FF",
        },
        ink: {
          DEFAULT: "#0B1220",
          muted: "#5B6472",
        },
        border: {
          DEFAULT: "#E6E8F0",
        },
        success: "#16A34A",
        accent: {
          pink: "#FF4D8D",
          coral: "#FF6B6B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "2xl": "1rem",
        navbar: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(13,18,32,.08)",
        "soft-lg": "0 20px 60px rgba(13,18,32,.12)",
        press: "0 2px 0 rgba(13,18,32,.12)",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
