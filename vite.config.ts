import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /* Config Alias */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@pictures": `${path.resolve(__dirname, "./src/pictures/")}`,
      "@interface": `${path.resolve(__dirname, "./src/interface/")}`,
      "@service": `${path.resolve(__dirname, "./src/service/")}`,
      "@stores" : `${path.resolve(__dirname,"./stc/stores")}`
      },
  },

  /* Config Global Scss Variable */
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/scss/index.scss";` },
    }
  }
})
