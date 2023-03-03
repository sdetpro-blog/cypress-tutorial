describe('Product Details', () => {
    it('should display the correct product details', () => {
        cy.visit('https://www.demoblaze.com/prod.html?idp_=1');
        cy.get('.product-deatil').should('be.visible')
            .within(() => {
                cy.get('.name').should('be.visible')
                    .and('contain', 'Samsung galaxy s6');
                cy.get('.product-image').should('be.visible');
                cy.get('.price-container').should('be.visible')
                    .and('contain', '$');
                cy.get('#more-information').should('be.visible');
                cy.contains('Add to cart').should('be.visible');
            });
    });
});
