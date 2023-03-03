import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";

const LOGIN_CRED = {
    username: "tun",
    password: "admin"
}

describe('Login Test', () => {
    let headerComp;
    let loginComp;
    beforeEach(() => {
        cy.visit('/');
        headerComp = new HeaderComponent();
        loginComp = new LoginComponent();
    })

    const login = (username, password) => {
        headerComp.getLoginLink().click({force: true});
        loginComp.getLoginModal().should('be.visible')
        loginComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
        loginComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
        loginComp.getLoginBtn().click({force: true});
    }

    it('should be able to login with correct cred', () => {
        const {username, password} = LOGIN_CRED;
        login(username, password);
        headerComp.getLoggedUsername().should('be.visible');
        headerComp.getLoggedUsername().should('contain.text', `Welcome ${LOGIN_CRED.username}`);
    });

    it('should be able to see wrong username', () => {
        const {username, password} = LOGIN_CRED;
        login(username + "_WRONG", password);
        cy.on('window:alert', alert => {
            expect(alert).to.contains("User does not exist.")
        })
    });

    it('should be able to see wrong password', () => {
        const {username, password} = LOGIN_CRED;
        login(username, password + "_WRONG");
        cy.on('window:alert', alert => {
            expect(alert).to.contains("Wrong password.")
        })
    });

});