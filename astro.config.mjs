import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from 'rehype-external-links';
import ctpMocha from '@catppuccin/vscode/themes/mocha.json';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://commandergl.github.io/',
  base: "/blog",
  server: {
    host: true
  },
  markdown: {
    shikiConfig: {
      theme: ctpMocha
    },
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  },
  integrations: [sitemap(), vue()]
});