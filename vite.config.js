import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/STARR/', // 👈 required for GitHub Pages
  plugins: [react()],
})
