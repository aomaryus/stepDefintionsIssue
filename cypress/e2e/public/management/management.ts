import { Given } from '@badeball/cypress-cucumber-preprocessor';
before(() => {
  cy.login();cy.log('management login');
});

Given('management', () => {
  cy.log('management');
});
