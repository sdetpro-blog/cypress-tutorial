const COMPONENT_SELECTOR = ".article-topstory"

class ArticleTopStoryComponent {

    constructor(component) {
        this.component = component
    }

    static componentSelector() {
        return COMPONENT_SELECTOR
    }

    get titleElem(){
        return this.component.find(".title-news")
    }

    get descriptionElem(){
        return this.component.find(".description")
    }

    get metaNewsElem(){
        return this.component.find(".meta-news")
    }

}

module.exports = ArticleTopStoryComponent