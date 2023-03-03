import NavSearchBarFormComponent  from '../components/NavSearchBarFormComponent'

class AmazonHomePage {

    constructor() {
        this.component = cy.get("html")
    }

    get navSearchBarFormComponent(){
        let component = this.component.find(NavSearchBarFormComponent.getComponentSelector())
        return new NavSearchBarFormComponent(component)
    }

}

module.exports = AmazonHomePage