import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/CodeUnity/',
    root: 'src/test',
    build: {
        outDir: '../../dist',
    },
    server: {
        port: 3000,
        open: '/' // Вказуємо, яку сторінку відкривати

    },
    assetsInclude: ['**/*.glb']
});