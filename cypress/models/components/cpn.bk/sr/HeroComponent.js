export class HeroComponent {

    static COMP_SEL = '.showcase__hero';

    constructor(component) {
        this.component = component;
    }

    get cardTitle(){
        return this.component.find('.card__title');
    }

}