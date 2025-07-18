import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { generateInputEntries, ViteEjsHotModuleReloadPlugin } from './config/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...generateInputEntries(__dirname),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    ViteEjsPlugin(undefined, {
      ejs: () => ({
        views: [resolve(__dirname, 'src/partials')],
      }),
    }),
    ViteEjsHotModuleReloadPlugin(),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        silenceDeprecations: ['global-builtin', 'import'],
      },
    },
  },
});
