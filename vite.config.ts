import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import viteImagemin from 'vite-plugin-imagemin';
import * as path from "path";

const ROOT_DIR = 'src';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  root: ROOT_DIR,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, ROOT_DIR, 'index.html'),
        examples: resolve(__dirname, ROOT_DIR, 'examples.html'),
      },
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    handlebars({
      partialDirectory: resolve(__dirname, ROOT_DIR, '_partials')
    })
  ],
});
