import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
const tina = ({
  directiveName = 'tina'
} = {}) => ({
  name: 'tina-cms',
  hooks: {
    'astro:config:setup': ({
      addClientDirective,
      opts
    }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: './client-directives/tina.mjs'
      });
    }
  }
});


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tina(), tailwind()],
  site: 'https://tina-astro-batutinha.vercel.app',
  base: '/admin',
  compressHTML: true,
});