import {HomePageAPI} from "../../support/HomePageAPI";
import ProductDetailsComponent from "../../models/components/ProductDetailsComponent";

describe('Product Details Test', function () {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should be able to verify product details', function () {
        HomePageAPI.getHomePageProducts().then(apiData => {
            const ranDomProduct = apiData[Math.floor(Math.random() * apiData.length)];
            const randomProductTitle = ranDomProduct.title.trim().replace("\n", "");
            cy.contains(randomProductTitle).click();

            const productDetails = new ProductDetailsComponent();
            productDetails.getProductImg().should('be.visible');
            productDetails.getProductName().should('have.text', randomProductTitle);
            productDetails.getProductPrice().should('contain.text', ranDomProduct.price);
            productDetails.getProductDescription().should('not.be.empty');
        })
    });

});