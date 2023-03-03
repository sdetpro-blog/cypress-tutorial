import DemoBlazePage from "../models/pages/DemoBlazePage";
import products from './products.json';

describe('SR HomePage', () => {

    it('should be able to get hero card title', () => {
        cy.visit("https://www.demoblaze.com/");
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                expect(allCardData).to.be.deep.eq(products);
            })
        })
    });

    it.only('should be able to get hero card title', () => {
        cy.log(JSON.stringify(apiProduct))
        let apiProductData = apiProduct.response.body.Items.map(item => {
            return {
                itemName: item.title.replace('\n', ''),
                itemPrice: `$${item.price}`
            }
        })
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                expect(allCardData).to.be.deep.eq(apiProductData);
            })
        })

    });

});