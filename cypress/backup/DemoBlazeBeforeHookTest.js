import DemoBlazePage from "../models/pages/DemoBlazePage";
import {HomePageAPI} from "../support/HomePageAPI";

describe('SR HomePage', () => {
    let apiProduct
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com')
        HomePageAPI.getHomePageProducts().then(entries => apiProduct = entries)
    })

    it('should be able to get hero card title', () => {
        let apiProductData = apiProduct.map(item => {
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