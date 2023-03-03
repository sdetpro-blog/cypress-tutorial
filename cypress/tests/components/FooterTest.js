import FooterComponent from "../../models/components/FooterComponent";

describe('Footer Component Test', function () {
    let footerComp;
    before(() => {
        cy.visit('/');
        footerComp = new FooterComponent();
    })

    it('Test for about us column', function () {
        const expectedAboutUsData = {
            header: "About Us",
            desc: "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
        }
        footerComp.getAboutUsData().then(actualAboutUsData => {
            cy.wrap('').then(() => {
                expect(actualAboutUsData).to.eql(expectedAboutUsData);
            })
        });
    });

    it('Test for contact us column', function () {
        const expectedContactUsData = {
            header: "Get in Touch",
            address: "2390 El Camino",
            phone: "+440 123456",
            email: "demo@blazemeter.com"
        }
        footerComp.getContactUsData().then(actualContactUsData => {
            cy.wrap('').then(() => {
                expect(actualContactUsData.header).to.equal(expectedContactUsData.header);
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.address);
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.phone);
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.email);
            })
        });
    });

});