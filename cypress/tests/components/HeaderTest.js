import HeaderComponent from "../../models/components/HeaderComponent";

describe('Header Component Test', function () {
    const BRAND_TEXT = 'PRODUCT STORE';
    let headerComp;
    before(() => {
        cy.visit('/');
        headerComp = new HeaderComponent();
    })

    it('Test for brand logo', function () {
        headerComp.brandLogoImg().should('be.visible')
        headerComp.brandLogo().should('contain.text', BRAND_TEXT)
    });

    it('Test for header menu details', function () {
        const expectedMenuDetails = [
            {
                "text": "Home (current)",
                "href": "index.html"
            },
            {
                "text": "Contact",
                "href": "#"
            },
            {
                "text": "About us",
                "href": "#"
            },
            {
                "text": "Cart",
                "href": "cart.html"
            },
            {
                "text": "Log in",
                "href": "#"
            },
            {
                "text": "Sign up",
                "href": "#"
            }]
        headerComp.getMenuDetails().then(actualMenuDetails => {
            cy.wrap('').then(() => {
                expect(actualMenuDetails).to.be.deep.equal(expectedMenuDetails);
            })
        })
    });


});