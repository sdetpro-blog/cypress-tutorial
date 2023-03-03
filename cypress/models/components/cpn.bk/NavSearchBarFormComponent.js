const COMPONENT_SELECTOR = "#nav-search-bar-form"

class NavSearchBarFormComponent {

    constructor(component) {
        this.component = component
    }

    static getComponentSelector(){
        return COMPONENT_SELECTOR
    }

    get searchTxtBxElem(){
        return cy.get(COMPONENT_SELECTOR).find("#twotabsearchtextbox")
    }

    get searchBtnElem(){
        return cy.get(COMPONENT_SELECTOR).find("#nav-search-submit-button")
    }

}

module.exports = NavSearchBarFormComponent