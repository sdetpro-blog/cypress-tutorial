const COMPONENT_SELECTOR = "div[cel_widget_id^='MAIN-SEARCH_RESULTS']"

class SearchResultItemComponent {

    constructor(component) {
        this.component = component
    }

    static componentSelector(){
        return COMPONENT_SELECTOR
    }

    get title(){
        return this.component.find("h2")
    }

}

module.exports = SearchResultItemComponent