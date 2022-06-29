import { Given } from '@badeball/cypress-cucumber-preprocessor';
before(() => {
  cy.login();
  cy.log('network login');
});

Given('network', () => {
  cy.log('network');
});
