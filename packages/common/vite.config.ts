import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'MyLib',
            formats: ['es'],
            fileName: (format) => `oort-lib.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components', 'antd', "ethers"],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
            plugins: [commonjs({
                transformMixedEsModules: true
            })]
        },
    },
});