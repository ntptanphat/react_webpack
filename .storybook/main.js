const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: [
    '../src/components/**/*.stories.tsx',
    '../src/styles/*.stories.tsx',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
