import pks from "./package.json" assert { type: "json" }
import createConfig from "../../rollup.config.mjs"
import esbuild from "rollup-plugin-esbuild";
import commonjs from '@rollup/plugin-commonjs';

export default createConfig({ esbuild, commonjs }, pks.name, Object.keys(pks.dependencies));