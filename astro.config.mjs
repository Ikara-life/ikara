// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tunnel({
      url: 'http://localhost:4321',
      acceptCloudflareNotice: true
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom']
          }
        }
      }
    },
    server: {
      headers: {
        'Content-Encoding': 'gzip',
        'Vary': 'Accept-Encoding'
      }
    }
  }
});