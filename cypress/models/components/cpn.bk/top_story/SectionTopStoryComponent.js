import ArticleTopStoryComponent from "./ArticleTopStoryComponent"

const COMPONENT_SELECTOR = "section[section_topstory]"

class SectionTopStoryComponent {

    constructor(component) {
        this.component = component;
    }

    static componentSelector(){
        return COMPONENT_SELECTOR
    }

    get articleTopStoryComp(){
        let component = this.component.find(ArticleTopStoryComponent.componentSelector())
        return new ArticleTopStoryComponent(component)
    }

}

module.exports = SectionTopStoryComponent