import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),

        viteStaticCopy({
            targets: [
                {
                    src: 'src/styles',
                    dest: './'
                }
            ]
        })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            // name: 'MyLib',
            formats: ['es', 'cjs'],
            fileName: (format) => `ui.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'antd', "ethers", 'mobx', 'mobx-react', 'react-router-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
                sourcemap: true
            }
        },
    },
});