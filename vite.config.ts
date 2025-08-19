import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@prism': path.resolve(__dirname, './components/prism/ui'),
      '@lib': path.resolve(__dirname, './lib')
    },
  },
})