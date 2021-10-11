import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/noromol/',
  plugins: [vue()],
  server: {
    port: 8080,
    open: true,
  },
  build: {
    sourcemap: true,
  }
})