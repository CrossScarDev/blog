import { defineConfig } from 'astro/config';
import houston from './houston.json';
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
      theme: houston
    },
    rehypePlugins: [[ rehypeExternalLinks, { target: '_blank' }]]
  },
  integrations: [sitemap()]
});