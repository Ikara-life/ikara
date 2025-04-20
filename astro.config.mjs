// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  site: 'https://ma-shangrila.com',
  base: '/ikara',
  integrations: [react(), (await import("@playform/compress")).default()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
      },
    },
    server: {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    },
  },
  compressHTML: true,
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: ["*"],
    remotePatterns: [],
    cacheDir: './node_modules/.astro/cache/assets',
  }
});
