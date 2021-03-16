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

And ('I click on -Purchase Foreign Currency- tab', () => {
    cy.get('a[href="#ui-tabs-3"]').click();
});


Then('the system shows me {string} tab form', (formName) => {
    cy.get('a[href="#ui-tabs-3"]').should('have.text', formName);

    cy.get('h2.board-header').should('contain', 'Purchase foreign currency cash');
});

When('I fill correctly purchase form', () => {
    cy.get('select[name="currency"]').select('CAD').should('have.value', 'CAD');
    cy.get('#sp_sell_rate').contains('1 dollar (CAD) =');

    cy.get('input[name="amount"]').type('100');
    cy.get('input[name="inDollars"]').check();
});

When('I fill purchase form except currency radio', () => {
    cy.get('select[name="currency"]').select('CAD').should('have.value', 'CAD');
    cy.get('#sp_sell_rate').contains('1 dollar (CAD) =');

    cy.get('input[name="amount"]').type('100');
    cy.get('input[name="inDollars"]').should('not.be.checked')
});

But('I miss fill {string} field', (fieldName) => {
    if (fieldName === 'currency') {
        cy.get('select[name="currency"]').select('');
    } else if (fieldName === 'inDollars') {
        cy.get(`input[name="${fieldName}"]`).uncheck();
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


Then('I should see -Conversion Amount- message', () => {
    cy.get('#pc_conversion_amount').should('contain', 'dollar (CAD) =');
});


Then('I should see alert message', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Please, ensure that you have filled all the required fields with valid values.');
    });
});