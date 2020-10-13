describe('testing form inputs', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza-form")
    })
    it("meets MVP", () => {
        cy.get('[data-cy=name]').type("Chad").should('have.value', "Chad")
        cy.get('[data-cy=size]').select('large').should('have.value', "large")
        cy.get('[data-cy=pepperoni]').check().should('be.checked')
        cy.get('[data-cy=blackOlives]').check().should('be.checked')
        cy.get('[data-cy=greenPepper]').check().should('be.checked')
        cy.get('[data-cy=submit]').type('extra sauce').should('have.value', 'extra sauce')
        cy.get('[data-cy=submit]').click()
    })
});




