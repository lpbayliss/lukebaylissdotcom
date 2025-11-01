// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lukebayliss.com",
  integrations: [react(), mdx()],
  markdown: {
    drafts: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
