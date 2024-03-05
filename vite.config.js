import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

/*
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginRequire from 'vite-plugin-require';

export default defineConfig({
  base: '/MapaJudicialNet.Consulta',
  server: {
    proxy: {
      "/api": {
        target: "http://desarrollo.tribunales.gov.ar/MapaJudicialNet.Consulta/",
        changeOrigin: true,
      }
    }
  },
  plugins: [react(), 
    vitePluginRequire()
  ],})
  */