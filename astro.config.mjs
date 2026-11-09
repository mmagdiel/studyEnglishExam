// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import pwa from './integrations/pwa.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), pwa()],

  vite: {
    plugins: [tailwindcss()]
  }
});