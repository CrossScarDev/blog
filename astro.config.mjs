import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://commandergl.github.io/',
  base: "/blog",
  server: {
    host: true
  },
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    },
    rehypePlugins: [[ rehypeExternalLinks, { target: '_blank' }]]
  },
  integrations: [sitemap()]
});