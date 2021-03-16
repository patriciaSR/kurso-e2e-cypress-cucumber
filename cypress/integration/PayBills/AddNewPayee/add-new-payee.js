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

And ('I click on -Add New Payee- tab', () => {
    cy.get('a[href="#ui-tabs-2"]').click();
});


Then('the system shows me {string} tab form', (formName) => {
    cy.get('a[href="#ui-tabs-2"]').should('have.text', formName);

    cy.get('h2.board-header').should('contain', 'Who are you paying?');
});

When('I fill correctly new payee form', () => {
    cy.get('input[name="name"]').type('test');
    cy.get('textarea[name="address"]').type('test street');
    cy.get('input[name="account"]').type('1234');
    cy.get('input[name="details"]').type('new payee');
});
 
But('I miss fill {string} field', (fieldName) => {
    if (fieldName === 'address') {
        cy.get('textarea[name="address"]').clear();
    } else {
        cy.get(`input[name="${fieldName}"]`).clear();
    }
});

And('I click {string} button', (buttonName) => {
    cy.get(`input[value="${buttonName}"]`).click();
});

Then('I should see {string} message', (message) => {
    cy.get('#alert_content').should('have.text', message);
});

Then('I should see {string} field with {string} alert message', (fieldName, message) => {
    if (fieldName === 'address') {
        cy.get(`textarea[name="${fieldName}"]:invalid`).should("have.length", 1);

        cy.get(`textarea[name="${fieldName}"]`).invoke('prop', 'validationMessage')
        .should('equal', message);
    } else {
        cy.get(`input[name="${fieldName}"]:invalid`).should("have.length", 1);

        cy.get(`input[name="${fieldName}"]`).invoke('prop', 'validationMessage')
        .should('equal', message);
    }
});