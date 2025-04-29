// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import compress from "@playform/compress";

export default defineConfig({
  output: 'static',
  site: 'https://ikara-life.github.io',
  experimental: {
    responsiveImages: true,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    client: './dist',
  },
  integrations: [react(), compress()],
  vite: {
    plugins: [tailwindcss({
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      theme: {
        extend: {
          screens: {
            'xs': '480px',
          },
          fontFamily: {
            sans: ['Geist Sans', 'system-ui', 'sans-serif'],
            mono: ['Geist Mono', 'monospace'],
          },
          colors: {
            primary: {
              DEFAULT: '#4F46E5', // Example primary color
              20: 'rgba(79, 70, 229, 0.2)',
              5: 'rgba(79, 70, 229, 0.05)',
            },
          },
          blur: {
            sm: '4px',
            md: '8px',
          },
        },
      },
      plugins: [],
    })],
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
