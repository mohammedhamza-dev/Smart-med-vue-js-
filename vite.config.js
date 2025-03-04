import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allows access on local network
    port: 3000, // You can change this if needed
  },
  plugins: [
    vue(), 
    tailwindcss()
  ],
})