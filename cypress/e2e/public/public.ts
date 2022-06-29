import { Given } from '@badeball/cypress-cucumber-preprocessor';

before(() => {
  cy.login();
  cy.log('public login');
});

Given('public', () => {
  cy.log('public');
});
