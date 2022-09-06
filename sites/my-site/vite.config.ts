import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  optimizeDeps: {
    esbuildOptions: {
        target: "es2020",
        supported: { bigint: true },

        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            // NodeGlobalsPolyfillPlugin({
            //     buffer: true,
            //     process: true,
            // }),
            // NodeModulesPolyfillPlugin({  })
        ]
    },
  },

  // resolve: {
  //   alias: {
  //       process: "process/browser",
  //       stream: "stream-browserify",
  //       zlib: "browserify-zlib",
  //       util: "util",
  //   },
  // }
})
