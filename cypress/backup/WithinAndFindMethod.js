describe('Learn about within and find methods', function () {
    it('within method', function () {
        cy.visit('https://www.simplyrecipes.com/');
        // cy.get('.card__title').each(($cardTitle, index) => {
        //     cy.log(index);
        // })
        cy.get('.showcase__hero').within(() => {
            cy.get('.card__title').each(($cardTitle, index) => {
                cy.log(index);
            })
        })
    });

    it.only('find method', function () {
        cy.visit('https://www.simplyrecipes.com/');
        cy.get('.showcase__hero').find('.card__title').each(($cardTitle, index) => {
            cy.log(index);
        })
    });
});