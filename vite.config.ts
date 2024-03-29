import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/style/style.scss";`,
      },
    },
  },
  plugins: [vue()],
})
