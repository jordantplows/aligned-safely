import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
  server: {
    port: 5173,
    strictPort: false,
  }
})
