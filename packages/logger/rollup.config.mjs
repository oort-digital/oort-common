import pks from "./package.json" assert { type: "json" }
import createConfig from "./common.mjs"

export default createConfig(pks.name, Object.keys(pks.dependencies));