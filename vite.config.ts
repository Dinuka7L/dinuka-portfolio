import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dinuka-portfolio/', // 👈 Add this line — replace with your repo name if needed
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
