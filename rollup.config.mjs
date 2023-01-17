const input = "./src/index.ts";

export default function createConfig(pluginsData, packageName, packageDependencies) {

  const { esbuild, nodeResolve, commonjs, json } = pluginsData

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

  return [
    {
      input,
      plugins,
      external: packageDependencies,
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
    },
  ];
}