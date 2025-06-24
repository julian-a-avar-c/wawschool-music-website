// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import node from "@astrojs/node";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/products/rdu": "https://pacssuccess.pacsllc.net/products-rdu",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx(), partytown(), sitemap(), icon()],

  adapter: vercel(),
  output: "static",
});
