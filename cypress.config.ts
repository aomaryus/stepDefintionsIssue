/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/network.feature',
      'cypress/e2e/private.feature',
      'cypress/e2e/public.feature',
      'cypress/e2e/public/management.feature'
    ],

    setupNodeEvents(on, config) {
      config.baseUrl = 'https://duckduckgo.com';
      return require('./cypress/plugin/index.ts')(on, config);
    }
  }
});
