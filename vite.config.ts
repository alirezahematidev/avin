import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// relative base so the same build works on GitHub Pages (/repo/) and Liara (/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
