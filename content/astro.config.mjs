// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import moduleFederation from "astro-module-federation";
import react from '@astrojs/react';
import dotenv from 'dotenv';

dotenv.config(); // 👈 esto permite leer process.env en tiempo de build
const remoteBaseUrl = process.env.REMOTE_LIBRARY_URL ?? 'http://localhost' ;

console.log('base', remoteBaseUrl);

// https://astro.build/config
export default defineConfig({
  base:'/content/',
  integrations: [react(), moduleFederation({
    remotes: {
      library:  `${remoteBaseUrl}:4173/assets/remoteEntry.js`
    },
    shared: ['react', 'react-dom', 'gsap', '@gsap/react'],
  })],

  adapter: node({
    mode: "standalone"
  }),
});