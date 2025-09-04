// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://bredikhin.github.io',
  base: '/',
  integrations: [react()],
  vite: {
    server: {
      port: 4322,
      fs: {
        allow: ['..']
      }
    }
  },
  // GitHub Pages deployment settings
  build: {
    assets: '_astro'
  }
});