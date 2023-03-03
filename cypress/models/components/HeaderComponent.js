export default class HeaderComponent {
    brandLogo = () => cy.get("#nava")
    brandLogoImg = () => cy.get("#nava img")
    headerMenuItemList = () => cy.get('.nav-item a')
    getLoginLink = () => cy.get('#login2')
    getSignUpLink = () => cy.get('#signin2')
    getLoggedUsername = () =>cy.get('#nameofuser')
    getCartTLink = () => cy.get('#cartur')

    getMenuDetails(){
        let menuDetails = [];
        this.headerMenuItemList().each($item => {
            const style = $item.attr("style");
            if(style === undefined || !style.includes("display:none")){
                menuDetails.push({
                    text: $item.text(),
                    href: $item.attr("href")
                })
            }
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(menuDetails));
        })
    }
}