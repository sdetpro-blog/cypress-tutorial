const COMPONENT_SELECTOR = "[id^='footer']"

class FooterComponent {

    static get componentSelector(){
        return COMPONENT_SELECTOR
    }

    get allFooterLinks(){
        return cy.get(COMPONENT_SELECTOR).find("a")
    }

    get allFooterTexts(){
        return cy.get(COMPONENT_SELECTOR).find("li a")
    }

}

module.exports = FooterComponent