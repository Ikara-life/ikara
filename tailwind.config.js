/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
}
