import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette. Verify exact hex values against the live site's
        // computed styles (DevTools) and adjust here — Tailwind classes
        // elsewhere in the project never hardcode raw hex, they all read
        // from these tokens.
        ink: {
          DEFAULT: "#0F1229", // primary heading / body text
          secondary: "#5B6178", // muted paragraph text
        },
        brand: {
          DEFAULT: "#2F7CF6", // primary CTA / accent blue
          dark: "#1D5FD6", // hover / pressed state
          light: "#E9F1FF", // tinted backgrounds, badges
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F6F5FB", // alternating section background
        },
        border: {
          DEFAULT: "#E7E5F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(15, 18, 41, 0.06)",
        "card-hover": "0 12px 32px rgba(15, 18, 41, 0.10)",
      },
      spacing: {
        section: "6rem", // desktop vertical section rhythm
        "section-sm": "3.5rem", // mobile vertical section rhythm
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
