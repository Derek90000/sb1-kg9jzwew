import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  build: {
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});