import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(dependencies),
      output: {
        // globals: {
        //     react: 'React',
        //     'react-dom': 'ReactDOM'
        // },
        sourcemap: true,
      },
    },
  },
});
