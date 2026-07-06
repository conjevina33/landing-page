// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://conjevina33.github.io',
  base: '/landing-page',
  vite: {
    plugins: [tailwindcss()],
  },
});
