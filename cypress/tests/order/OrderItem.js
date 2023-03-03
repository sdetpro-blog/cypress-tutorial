import {HomePageAPI} from "../../support/HomePageAPI";
import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";

describe('Product Details Test', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Order item as guest', () => {
        purchaseItem();
    });

    it('Order item as logged in user', () => {
        // Login
        const LOGIN_CRED = {
            username: "tun",
            password: "admin"
        }
        const {username, password} = LOGIN_CRED;
        login(username, password);

        // Purchase
        purchaseItem();
    });

});

const login = (username, password) => {
    const headerComp = new HeaderComponent();
    const loginComp = new LoginComponent();
    headerComp.getLoginLink().click({force: true});
    loginComp.getLoginModal().should('be.visible')
    loginComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
    loginComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
    loginComp.getLoginBtn().click({force: true});
}

const purchaseItem = () => {
    HomePageAPI.getHomePageProducts().then(apiData => {
        const ranDomProduct = apiData[Math.floor(Math.random() * apiData.length)];
        const randomProductTitle = ranDomProduct.title.trim().replace("\n", "");
        cy.contains(randomProductTitle).click();

        // Click on Add to cart button
        cy.contains('Add to cart').click();

        // Go to cart
        cy.get('#cartur').click();

        // Verify cart details

        // Place order
        cy.contains('Place Order').click();

        // Place order details
        cy.get('#name').type('Tun');
        cy.get('#country').type('Vietnam');
        cy.get('#city').type('HCM');
        cy.get('#card').type('123456789');
        cy.get('#month').type('02');
        cy.get('#year').type('29');
        cy.contains('Purchase').click();


        // Verification
        // Verify purchase confirm dialog
        cy.get('.sweet-alert h2').should('have.text', 'Thank you for your purchase!')
        cy.get('.sweet-alert .lead').then($confirmOrderDetails => {
            cy.wrap($confirmOrderDetails).should('contain.text', ranDomProduct.price)
            cy.wrap($confirmOrderDetails).should('contain.text', 'Card Number: 123456789')
        })
    })
}

