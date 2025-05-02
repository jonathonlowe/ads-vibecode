import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  optimizeDeps: {
    include: ['@atlaskit/textfield', '@atlaskit/app-provider', '@atlaskit/css-reset'],
    force: true
  },
  build: {
    commonjsOptions: {
      include: [/@atlaskit\/.*/, /node_modules/]
    }
  }
})
