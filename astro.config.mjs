// @ts-check

import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lukebayliss.com",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), mdx()],
  vite: {
    // @ts-expect-error - Tailwind CSS plugin type incompatibility with Vite
    plugins: [tailwindcss()],
  },
});
