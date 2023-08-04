
import 'cypress-xpath';

describe("Appointment Automation",()=>{
    it("Visiting katalon demo website",()=>{
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
        cy.get('#txt_comment').type('This is a comment');
        cy.get('#btn-book-appointment').click();
        cy.get('h2').should('have.text','Appointment Confirmation');
        

    })
    

})
