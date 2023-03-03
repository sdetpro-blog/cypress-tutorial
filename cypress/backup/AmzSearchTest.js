import AmazonHomePage from '../models/pages/AmazonHomePage'
import AmazonSearchResultPage from '../models/pages/AmazonSearchResultPage'

describe('Amz search', () =>  {

    it('should be able to search dining table', () =>  {
        const SEARCH_TEXT = "Dinning table";

        cy.visit("/");
        let amzHomPage = new AmazonHomePage();
        amzHomPage.searchTxtBxElem().type(SEARCH_TEXT);
        amzHomPage.searchBtnElem().click();

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.searchItemElemList.should("not.have.length", 0);

        cy.wrap("foo").should("eq", 'foo')
    });

});