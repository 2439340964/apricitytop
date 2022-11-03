import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/home': {
  //       target: 'http://124.221.2.47:8031',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/home/, ''),
  //       ws: false
  //     },
  //   }
  // },
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    }
  },
})
