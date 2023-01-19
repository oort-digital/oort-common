const input = "./src/index.ts";

export default function createConfig(pluginsData, packageName, packageDependencies) {

  const { esbuild, nodeResolve, commonjs, json } = pluginsData

  const plugins = [ ];

  if(nodeResolve) { plugins.push(nodeResolve({ preferBuiltins: false, browser: true })) }
  if(commonjs) { commonjs() }
  if(json) { json() }

  plugins.push(
      esbuild({
      minify: true,
      tsconfig: "./tsconfig.json",
      loaders: {
        ".json": "json",
      }
    }))

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