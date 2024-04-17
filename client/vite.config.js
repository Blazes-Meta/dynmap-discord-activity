import { defineConfig } from 'vite';

export default defineConfig({
  envDir: '../',
  server: {
    port: 8080, // Hier ändern
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    hmr: {
      clientPort: 443,
    },
  },
});
