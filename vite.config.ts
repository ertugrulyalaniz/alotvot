import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'


export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: { preprocessorOptions: { css: { charset: false } } },
  plugins: [
    Vue(),
    Components({
        dirs: ['documentation', 'src/components', 'src/views'],
        extensions: ['vue', 'md'],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
