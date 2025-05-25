import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/weather-application/',  // 👈 ADD THIS LINE
  plugins: [react()],
});
