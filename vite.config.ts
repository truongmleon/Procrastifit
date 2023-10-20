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
        service: 'service.html',
        one: "/src/files/1st.pdf",
        two: "/src/files/2nd.pdf",
      },
    },
  },
  publicDir: 'src/asset'
})
