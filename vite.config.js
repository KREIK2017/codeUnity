import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/codeUnity/',
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: resolve(__dirname, 'src/test/index.html'),
        },
    },
    server: {
        port: 3000,
        open: '/test/index.html' // Вказуємо, яку сторінку відкривати
        // open: '/day2/index.html'

    },
    assetsInclude: ['**/*.glb']
});
