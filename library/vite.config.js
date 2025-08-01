import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    federation({
      name: 'library',
      filename: '/remoteEntry.js',
      exposes: {
        './Art': './src/components/Art.jsx',
        './Hero':'./src/components/Hero.jsx',
        './NavBar': './src/components/NavBar.jsx',
        './Menu':'./src/components/Menu.jsx',
        './Cocktails': './src/components/Cocktails.jsx',
        './About': './src/components/About.jsx',
        './Contact': './src/components/Contact.jsx',

      },
      build: {
        target: 'esnext',
        modulePreload: false,
        minify: false,
        cssCodeSplit: false, // para asegurar que el CSS de máscara esté en el mismo bundle
        assetsDir: 'assets', // carpeta donde se copiarán imágenes como la máscara
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.0' },
        gsap: { singleton: true, requiredVersion: '^3.13.0' },
        '@gsap/react': { singleton: true, requiredVersion: '^2.1.2' },
      }
    })
  ],
  css: {
    // por si quieres usar máscaras en Tailwind o importar CSS en componentes
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 4173,
    strictPort: true,
    cors: true

  },
})
