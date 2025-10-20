import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/CodeUnity/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/test/index.html'),
                // main: resolve(__dirname, 'src/day2/index.html'),

            },
        },
    },
    server: {
        port: 3000,
        open: '/src/test/index.html' // Вказуємо, яку сторінку відкривати
            // open: '/day2/index.html'

    },
    assetsInclude: ['**/*.glb']
});