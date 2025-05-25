## Vite + Tailwind css V4.1
 - yarn create vite .
 - yarn
 - yarn dev
 - npm install tailwindcss @tailwindcss/vite
## vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
## index.css
@import "tailwindcss";
## Thư viện cần cài
 - yarn add react-router-dom
## API endpoint chính(.env)
 - VITE_API_URL=https://api.example.com
