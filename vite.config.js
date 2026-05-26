import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'index.html',
        research: 'research.html',
        'latest-posts': 'latest-posts.html',
      },
    },
  },
  server: {
    open: true,
  },
})
