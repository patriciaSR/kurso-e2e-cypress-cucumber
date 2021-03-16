import { Given, When, Then, Before, But } from 'cypress-cucumber-preprocessor/steps';


Before(() => {
    cy.visit('/index.html');
});

Given('a user already logged in the system', () => {
    const username = 'username';
    const password = 'password';

    cy.login(username, password);
    cy.get('a.dropdown-toggle');
})

When('I visit -Pay Bills- page', () => {
    cy.visit('/bank/pay-bills.html');
});

Then('the system shows me {string} tab form', (formName) => {
    cy.get('a[href="#ui-tabs-1"]').should('have.text', formName);

    cy.get('h2.board-header').should('contain', 'Make payments to your saved payees');
});

When('I fill correctly payment form', () => {
    cy.get('select[name="payee"]').select('sprint');
    cy.get('select[name="account"]').select('1');
    cy.get('input[name="amount"]').type('100');
    cy.get('input[name="date"]').type('2021-03-17{enter}');
    cy.get('input[name="description"]').type('test pay');
});
 
But('I miss fill {string} field', (fieldName) => {
    cy.get(`input[name="${fieldName}"]`).clear();
});

And('I click {string} button', (buttonName) => {
    cy.get(`input[value="${buttonName}"]`).click();
});

Then('I should see {string} message', (message) => {
    cy.get('#alert_content').should('have.text', message);
});

Then('I should see {string} field with {string} alert message', (fieldName, message) => {
    cy.get(`input[name="${fieldName}"]:invalid`).should("have.length", 1);

    cy.get(`input[name="${fieldName}"]`).invoke('prop', 'validationMessage')
    .should('equal', message);
});