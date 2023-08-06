import 'cypress-xpath';

describe("Appointment Automation",()=>{
    it("Test Case 1: Book appointment with Medicare", () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
        cy.get('.checkbox-inline').click();
        cy.get('.col-sm-4 > :nth-child(2)').click();
        cy.get('#txt_visit_date').type('20/10/2021');
        cy.get("body").click();
        cy.get('#txt_comment').type('This is a comment for Medicare');
        cy.get('#btn-book-appointment').click();
        cy.get('h2').should('have.text','Appointment Confirmation');
        cy.get('#menu-toggle > .fa').click();
        cy.get(':nth-child(4) > a').click();
        cy.xpath("//p[normalize-space()='Yes']").should('have.text','Yes');
    });

    it("Test Case 2: Book appointment with Medicaid", () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
        cy.get('.checkbox-inline').click();
        cy.get('.col-sm-4 > :nth-child(2)').click();
        cy.get('#txt_visit_date').type('25/10/2021');
        cy.get("body").click();
        cy.get('#txt_comment').type('This is a comment for Medicaid');
        cy.get('#btn-book-appointment').click();
        cy.get('h2').should('have.text','Appointment Confirmation');
    });
    it("Log out Test", () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#menu-toggle > .fa').click();
        cy.xpath("//a[normalize-space()='Login']").click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#menu-toggle > .fa').click();
        cy.get(':nth-child(6) > a').click();
        cy.get('h1').should('have.text','CURA Healthcare Service');
        
    });
    // Add more test cases as needed
});
