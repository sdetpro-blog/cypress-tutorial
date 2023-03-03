import FooterInfoColumnComp from './FooterInfoColumn'
import FooterCustomerServiceColumnComp from './FooterCustomerServiceColumn'

class FooterComponent {

    constructor() {
        this.component = cy.get('.footer')
    }

    infoColumnComp(){
        return new FooterInfoColumnComp()
    }

    customerServiceColumnComp(){
        return new FooterCustomerServiceColumnComp()
    }

}

module.exports = FooterComponent