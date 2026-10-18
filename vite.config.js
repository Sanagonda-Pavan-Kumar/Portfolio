import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes the build work from any folder or static host (Netlify, Vercel, GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: './'
});
