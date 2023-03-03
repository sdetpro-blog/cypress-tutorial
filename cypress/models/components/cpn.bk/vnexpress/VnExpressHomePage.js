import SectionTopStoryComponent from "../top_story/SectionTopStoryComponent"
class VnExpressHomePage {

    constructor() {
       this.component = cy.get("html")
    }

    get sectionTopStoryComp(){
        let component = this.component.find(SectionTopStoryComponent.componentSelector())
        return new SectionTopStoryComponent(component)
    }

}

module.exports = VnExpressHomePage