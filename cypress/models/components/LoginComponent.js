export default class LoginComponent {
    getLoginModal = () => cy.get('#logInModal form')
    getUsername = () => cy.get('#loginusername')
    getPassword = () => cy.get('#loginpassword')
    getLoginBtn = () => cy.get('[onclick="logIn()"]')

}