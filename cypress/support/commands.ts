let env = 'test';

const envUrl = 'https://duckduckgo.com/';
declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): void;
  }
}
Cypress.Commands.add('login', () => {
  cy.visit('/', {});
});
