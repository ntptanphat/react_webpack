const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
		'@storybook/addon-knobs/register',
		'@storybook/addon-actions/register',
    '@storybook/addon-docs/register',
    '@storybook/addon-links/register',
	],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...custom.module.rules
        ]
      },
      resolve: {
        ...config.resolve,
        extensions: [
          ...config.resolve.extensions,
          ...custom.resolve.extensions,
        ],
      }
    }
  },
};
