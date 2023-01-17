import pks from "./package.json" assert { type: "json" }
import createConfig from "../../rollup.config.mjs"

import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";


export default createConfig({ esbuild, nodeResolve, commonjs, json }, pks.name, Object.keys(pks.dependencies));