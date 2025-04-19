import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? '/walenkamp/' : undefined,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Add this line to configure the alias
    },
  },
})
