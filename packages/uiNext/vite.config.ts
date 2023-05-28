import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { dependencies } from "./package.json"

export default defineConfig({
    plugins: [
        nodePolyfills({
            protocolImports: true,
        }),

        react(),
        dts({
            insertTypesEntry: true,
        }),

        viteStaticCopy({
            targets: [
                {
                    src: 'src/styles',
                    dest: './'
                },
                {
                    src: 'dist/style.css',
                    dest: './styles'
                }
            ]
        })
    ],
    build: {
        minify: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            // name: 'MyLib',
            formats: ['es'],
            fileName: (format) => `ui.${format}.js`,
        },
        rollupOptions: {
            //external: ['axios', 'react', 'react-dom', 'antd', "ethers", 'mobx', 'mobx-react', 'react-router-dom'],
            external: Object.keys(dependencies),
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
                sourcemap: true
            }
        },
    },

    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            // define: {
            //     global: 'globalThis'
            // },
            // Enable esbuild polyfill plugins
            // plugins: [
            //     NodeGlobalsPolyfillPlugin({
            //         buffer: true,
            //         fs: true
            //     })
            // ]
        }
    },

    css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            additionalData: '@root-entry-name: default;',
          },
        },
    },

    resolve: {
        alias: [
          { find: /^~/, replacement: '' }
        ],
    }
});

