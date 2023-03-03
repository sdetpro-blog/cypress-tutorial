import {SRHomePage} from "../models/pages/SRHomePage";

describe('SR HomePage', () =>  {

    it('should be able to get hero card title', () =>  {
        cy.visit("https://www.simplyrecipes.com/");
        new SRHomePage().getHeroCompTitle().then(title => {
            cy.wrap('').then(() => {
                expect(title).to.be.eq('Homemade Beef Birria')
            })
        })
    });

});