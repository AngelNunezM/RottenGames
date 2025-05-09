// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import tailwindcss from '@tailwindcss/vite';;
import { esMX } from '@clerk/localizations'

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    localization: esMX,
  })],
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: 'standalone'
  })
});