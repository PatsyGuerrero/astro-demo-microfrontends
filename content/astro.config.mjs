// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import moduleFederation from "astro-module-federation";
import react from '@astrojs/react';

const remoteBaseUrl = process.env.REMOTE_LIBRARY_URL ?? 'http://localhost:5143' ;

// https://astro.build/config
export default defineConfig({
  base:'/content/',
  integrations: [react(), moduleFederation({
    remotes: {
      library:  `${remoteBaseUrl}/assets/remoteEntry.js`
    },
    shared: ['react', 'react-dom', 'gsap', '@gsap/react'],
  })],

  adapter: node({
    mode: "standalone"
  }),
});