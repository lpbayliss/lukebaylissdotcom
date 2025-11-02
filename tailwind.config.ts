import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#030712",
          subtle: "#0B1120",
          muted: "#111827",
        },
        foreground: {
          DEFAULT: "#E5E7EB",
          muted: "#9CA3AF",
          accent: "#34D399",
        },
        border: {
          DEFAULT: "#1F2937",
          accent: "#10B981",
        },
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        terminal: "0 0 0 1px rgba(52, 211, 153, 0.35)",
      },
    },
  },
} satisfies Config;
