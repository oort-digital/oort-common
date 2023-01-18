import pks from "./package.json" assert { type: "json" }
import createConfig from "../../rollup.config.mjs"

import esbuild from "rollup-plugin-esbuild";

export default createConfig({ esbuild }, pks.name, Object.keys(pks.dependencies));