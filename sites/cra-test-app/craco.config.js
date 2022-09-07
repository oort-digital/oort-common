const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    plugins: [
      
    ],

    webpack: {
      plugins: [
        new NodePolyfillPlugin()
      ]
    }
  };