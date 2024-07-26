import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/vite-react-router/",
  build: {
    outDir: 'dist', // Ensure the build output is in the 'dist' directory
  },
})


