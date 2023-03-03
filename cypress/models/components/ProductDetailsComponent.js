export default class ProductDetailsComponent {
    getProductImg = () => cy.get('.product-image img');
    getProductName = () => cy.get('#tbodyid .name');
    getProductPrice = () => cy.get('#tbodyid .price-container');
    getProductDescription = () => cy.get('#tbodyid .description');
    getAddToCartBtn = () => cy.contains('Add to cart');
}