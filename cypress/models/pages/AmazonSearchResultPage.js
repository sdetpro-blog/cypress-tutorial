const SEARCH_RESULT_ITEM_SEL = 'div[cel_widget_id^="MAIN-SEARCH_RESULTS"]';

class AmazonSearchResultPage {

    get searchItemElemList(){
        return cy.get(SEARCH_RESULT_ITEM_SEL);
    }

}

module.exports = AmazonSearchResultPage