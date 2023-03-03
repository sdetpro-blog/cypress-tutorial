import FooterComponentColumn from  './FooterComponentColumn'

class FooterCustomerServiceColumn extends FooterComponentColumn {

    constructor() {
        super(cy.get('.column.customer-service'))
    }

}

module.exports = FooterCustomerServiceColumn