import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F6B66",
        "primary-dark": "#0A4A47",
        "primary-light": "#5EC4BC",
        accent: "#C98A3B",
        bg: "#052C24",
        surface: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.12)",
        ink: "#F4FAF8",
        "ink-soft": "#C8D9D4",
        "ink-muted": "#9BB5AD",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glass-lg": "0 24px 64px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.12)",
        btn: "0 1px 2px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.14)",
        "btn-hover":
          "0 2px 4px rgba(0,0,0,0.28), 0 4px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.16)",
        phone: "0 40px 80px -24px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255,255,255,0.12)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(2%,-3%) scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -2%) scale(1.08)" },
          "66%": { transform: "translate(-2%, 2%) scale(0.95)" },
        },
        pulseDot: {
          "0%": { transform: "scale(0.9)", opacity: "0.9" },
          "70%": { transform: "scale(2.4)", opacity: "0" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        aurora: "aurora 22s ease-in-out infinite",
        pulseDot: "pulseDot 2.4s ease-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
