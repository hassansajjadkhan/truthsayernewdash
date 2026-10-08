import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        mobileview: resolve(import.meta.dirname, 'mobileview/index.html'),
        mobileapp: resolve(import.meta.dirname, 'mobileview/app.html'),
      },
    },
  },
});
