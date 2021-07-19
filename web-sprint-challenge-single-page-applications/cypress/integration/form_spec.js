describe('Name Test', () => {
    it("Checks if the name input works", () =>{
        cy.visit('/build');
        cy.get('[href="/"]').click()
        cy.get('[data-cy=order-pizza]').click()
        cy.get('[data-cy=name]').type("Joshua").should('have.value','Joshua');
    })
})

describe('Topping Test', ()=> {
    it("Checks if it is possible to select multiple toppings", () =>{
        cy.visit('/build');
        cy.get('[href="/"]').click()
        cy.get('[data-cy=order-pizza]').click()
        cy.get('[data-cy=topping3]').click()
        cy.get('[data-cy=topping6]').click()
        cy.get('[data-cy=topping4]').click()
        cy.get('[data-cy=topping3]').should('be.checked')
        cy.get('[data-cy=topping6]').should('be.checked')
        cy.get('[data-cy=topping4]').should('be.checked')
    })
})

describe('Form Test', () => {
    it("Checks if the form submission works", () =>{
        cy.visit('/build');
        cy.get('[href="/"]').click();
        cy.get('[data-cy=order-pizza]').click();
        cy.get('[data-cy=name]').type("Joshua").should('have.value','Joshua');
        cy.get('[data-cy=sauce]').click();
        cy.get('[data-cy=topping3]').click();
        cy.get('[data-cy=topping6]').click();
        cy.get('[data-cy=topping4]').click();
        cy.intercept('POST','http://localhost:5000/api/pizza', (req)=>{
            req.continue((res) => {
                expect(res.statusCode).to.equal(201)
            })
        }).as('postOrder');
        cy.get('[data-cy=submit]').click();
        cy.wait('@postOrder');
        
    })
})