import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import million from 'million/compiler'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react()
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "~", replacement: path.resolve(__dirname, "public") }
    ],
  },
  envDir: 'env',
  envPrefix: 'REACT_'
})
