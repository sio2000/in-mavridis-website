import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
<<<<<<< HEAD
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
=======
    sourcemap: false,
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
<<<<<<< HEAD
          animations: ['framer-motion'],
          map: ['leaflet', 'react-leaflet']
        }
      }
    },
    chunkSizeWarningLimit: 1000
=======
          animations: ['framer-motion', '@react-spring/web'],
          map: ['leaflet', 'react-leaflet']
        }
      }
    }
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
<<<<<<< HEAD
  server: {
    port: 3000,
    strictPort: true
  }
=======
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
});
