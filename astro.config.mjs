// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zh.openterface.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
