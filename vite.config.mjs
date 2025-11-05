import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // Import the plugin

export default defineConfig({
    base: '/codeUnity/',
    root: 'src/test',
    build: {
        outDir: '../../dist',
    },
    server: {
        port: 3000,
        open: '/' // Вказуємо, яку сторінку відкривати

    },
    assetsInclude: ['**/*.glb'],
    plugins: [ // Add the plugins array
        viteStaticCopy({
            targets: [
                {
                    src: 'libs/draco/*', // Source path relative to Vite root (src/test)
                    dest: 'libs/draco' // Destination path relative to build.outDir
                }
            ]
        })
    ]
});