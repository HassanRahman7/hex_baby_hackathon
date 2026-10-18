import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps the build portable (works on any host path)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
