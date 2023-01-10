import createConfig from "../../rollup.config.mjs";
import pks from './package.json' assert { type: "json" };

export default createConfig(pks.name, pks.dependencies);