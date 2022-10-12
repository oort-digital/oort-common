const CracoLessPlugin = require('craco-less');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
    ],

    webpack: {
      plugins: [
        new NodePolyfillPlugin()
      ]
    }
  };