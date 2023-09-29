import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        resources: 'resources.html',
        announcements: 'announcements.html',
        contact: 'contact.html',
      },
    },
  },
  publicDir: 'src/asset'
})
