class FooterComponentColumn {

    constructor(component) {
        this.component = component
    }

    // All elements
    elems = {
        heading: () => this.component.find("h3"),
        links: () => this.component.find("li > a")
    }

    // Interaction methods
    headingText() {
        return this.elems.heading()
    }

    verifyLinkTexts(expectedLinks) {
        this.elems.links().each((link, index) => {
            cy.get(link).should("have.text", expectedLinks[index])
        })
    }
}

module.exports = FooterComponentColumn