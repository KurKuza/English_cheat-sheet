import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    checker({
      overlay: false,
      eslint: {
        lintCommand: 'eslint --cache --fix --ext src',
        dev: {
          logLevel: ['error'],
        },
      },
      typescript: true,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1500,
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
