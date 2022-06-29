import { Given } from '@badeball/cypress-cucumber-preprocessor';

before(() => {
  cy.login();
  cy.log('private login');
});

Given('private', () => {
  cy.log('private');
});
