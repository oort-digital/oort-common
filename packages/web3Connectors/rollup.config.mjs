import pks from './package.json' assert { type: "json" };


import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

const input = "./src/index.ts";
const plugins = [
  json(),
  esbuild({
    minify: false,
    tsconfig: "./tsconfig.json",
    loaders: {
      ".json": "json",
    },
  }),
];

function createConfig(packageName, packageDependencies) {
  return [
    {
      input,
      plugins,
      external: Object.entries(packageDependencies).map(x => x[0]),
      output: [
        {
          file: "./dist/index.cjs.js",
          format: "cjs",
          exports: "named",
          name: packageName,
          sourcemap: true,
        },
        {
          file: "./dist/index.es.js",
          format: "es",
          exports: "named",
          name: packageName,
          sourcemap: true,
        },
      ],
    }
  ];
}




export default createConfig(pks.name, pks.dependencies);