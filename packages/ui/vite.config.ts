import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),

    viteStaticCopy({
      targets: [
        {
          src: "src/styles",
          dest: "./",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      // name: 'MyLib',
      formats: ["es"],
      fileName: (format) => "index.js",
    },
    rollupOptions: {
      //external: ['axios', 'react', 'react-dom', 'antd', "ethers", 'mobx', 'mobx-react', 'react-router-dom'],
      external: Object.keys(dependencies),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        sourcemap: true,
      },
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: "@root-entry-name: default;",
      },
    },
  },

  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
});
