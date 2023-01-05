import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const input = "./src/index.ts";
const plugins = [
  nodeResolve({ preferBuiltins: false, browser: true }),
  commonjs(),
  json(),
  esbuild({
    minify: true,
    tsconfig: "./tsconfig.json",
    loaders: {
      ".json": "json",
    },
  }),
];

export default function createConfig(packageName, packageDependencies) {
  return [
    {
      input,
      plugins,
      external: packageDependencies,
      output: [
        {
          dir: "./dist/cjs",
          format: "cjs",
          exports: "named",
          name: packageName,
          sourcemap: true,
        },
        {
          dir: "./dist/es",
          format: "es",
          exports: "named",
          name: packageName,
          sourcemap: true,
        },
      ],
    },
  ];
}