import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiProxyTarget = env.VITE_API_PROXY_TARGET || 'https://cervejando-fullstack.vercel.app'

  return {
    // Serve files from the repository root while keeping the Vite config inside `frontend/`.
    root: path.resolve(__dirname, '..'),
    plugins: [react(), tailwindcss()],
    resolve: {
      // Alias `@` to the root `src` so imports like `@/components/...` keep working.
      alias: {
        '@': path.resolve(__dirname, '..', 'src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: apiProxyTarget,
          changeOrigin: true,
          secure: true,
        },
      },
    },
  }
})
