import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync } from 'node:fs'

function copyJsToDist() {
  return {
    name: 'copy-js-to-dist',
    closeBundle() {
      mkdirSync('dist/js', { recursive: true })
      copyFileSync('js/main.js', 'dist/js/main.js')
      copyFileSync('js/research.js', 'dist/js/research.js')
    },
  }
}

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
  plugins: [copyJsToDist()],
  server: {
    open: true,
  },
})
