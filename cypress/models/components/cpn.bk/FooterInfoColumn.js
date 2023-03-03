import FooterComponentColumn from  './FooterComponentColumn'

class FooterInfoColumn extends FooterComponentColumn {

    constructor() {
        super(cy.get('.column.information'))
    }

}

module.exports = FooterInfoColumn