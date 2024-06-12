import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-comfortaa)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
