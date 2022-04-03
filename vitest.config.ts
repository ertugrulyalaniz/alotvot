/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
    plugins: [
        Vue(),
        vueI18n(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
    },
})