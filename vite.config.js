import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '',
    root: 'src/test',
    publicDir: 'src/test/libs', // Set public directory to include draco files
    build: {
        outDir: '../../dist',
    },
    server: {
        port: 3000,
        open: '/' // Вказуємо, яку сторінку відкривати

    },
    assetsInclude: ['**/*.glb']
});