import HeaderComponent from "../../models/components/HeaderComponent";
import SignUpComponent from "../../models/components/SignUpComponent";

const generateRandomUser = usernameLength => {
    const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const ALL_CHARS_LENGTH = ALL_CHARS.length;
    let randomUsername = '';
    for (let index = 0; index < usernameLength; index++) {
        randomUsername += ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS_LENGTH))
    }
    return randomUsername;
}

const SING_UP_CRED = {
    username: generateRandomUser(9),
    password: "admin"
}

describe('Signup Test', () => {
    let headerComp;
    let signUpComp;
    beforeEach(() => {
        cy.visit('/');
        headerComp = new HeaderComponent();
        signUpComp = new SignUpComponent();
    })

    const signup = (username, password) => {
        headerComp.getSignUpLink().click({force: true});
        signUpComp.getSignUpModal().should('be.visible')
        signUpComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
        signUpComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
        signUpComp.getSignUpBtn().click({force: true});
    }

    it('should be able to create a new user', () => {
        const {username, password} = SING_UP_CRED;
        signup(username, password);
        cy.on('window:alert', alert => {
            expect(alert).to.not.contains("This user already exist.d")
        })
    });

    it('should be able to see existing username', () => {
        const {password} = SING_UP_CRED;
        signup("tun", password);
        cy.on('window:alert', alert => {
            expect(alert).contains("This user already exist")
        })
    });

    // after(() => {
    //     // Delete registered accounts
    // })
});