const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.plugins.push(new NodePolyfillPlugin());

    // Return the altered config
    return config;
  },

  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: 'storybook-preset-less',
      options: {
        // cssLoaderOptions: {
        //    modules: true,
        //    localIdentName: '[name]__[local]--[hash:base64:5]',
        // },
        lessLoaderOptions: {
          lessOptions: {
            // strictMath: false,
            // noIeCompat: true,
            // relativeUrls: false,
            javascriptEnabled: true,
          },
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}