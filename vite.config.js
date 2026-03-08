import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// Use base: '/' for user/org site (repo name = username.github.io).
// Use base: '/portfolio/' for project site (repo name = portfolio).
export default defineConfig({
  plugins: [vue()],
  base: process.env.GITHUB_PAGES_BASE || '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
