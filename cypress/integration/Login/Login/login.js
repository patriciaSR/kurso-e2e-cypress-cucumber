import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('I open home page', () => {
    cy.visit('/index.html');

});

When('I login correctly', () => {
    cy.login('username', 'password');
});

When('I login incorrectly', () => {
    cy.login('bad', 'bad');
});

Then('I should see homepage', () => {
    cy.get(':nth-child(3) > .dropdown-toggle').click();
});

Then('I should see error message', () => {
    cy.get('.alert-error').should('contain', 'Login and/or password are wrong.');
});