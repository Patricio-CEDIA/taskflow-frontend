import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Paso 2 (Sesión 7): GitHub Pages sirve el proyecto en
  // https://<usuario>.github.io/taskflow-frontend/, no en la raíz del
  // dominio — Vite necesita saber esa ruta base para que los assets
  // (JS/CSS) se resuelvan bien. Con dominio propio, cambia a '/'.
  base: '/taskflow-frontend/',
})
