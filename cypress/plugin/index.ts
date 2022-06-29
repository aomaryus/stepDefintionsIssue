/* eslint-disable @typescript-eslint/no-var-requires */

const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config);
  // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)]
    })
  );

  return config;
};
