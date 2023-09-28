//<reference types="Cypress" />;

describe("My Second Test Suite", function () {
  it("My FirstTest case", function () {
    //Visiting the website
    cy.visit("https://web.cloudapper.com");

    cy.wait(5000);

    //Logging to website
    cy.get("#txtEmail").type("m2sysqa.05+21@gmail.com");
    cy.get("#txtUserPassword").type("M2qatest@9");
    cy.get("#btnLogin").click();
    cy.wait(4000);

    //Selecting SalesQ app
    cy.get(":nth-child(1) > .custom-anchor > .card > .card-img-top").click();
    cy.wait(20000);

    //Skipping the instructions
    cy.get(".introjs-skipbutton").click();
    cy.get(".swal2-cancel").click();

    //Going to customer page
    cy.get("#menuId-f644029e-8ef5-44a1-822e-4a48e48b8d5a").click();

    //Adding a Customer
    cy.get(
      ".dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content"
    ).click();

    //Selecting Customer type
    cy.get(
      ".dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input"
    ).click();
    cy.get(
      '.dx-scrollview-content > [aria-selected="false"] > .dx-item-content'
    ).click();

    //Typing customer name
    cy.get("#stringField7").type("Mahfuzul Alam");

    //Sales Rep
    cy.get(".dx-lookup-field").click();
    cy.get(
      ".dx-scrollview-content > :nth-child(1) > .dx-template-wrapper > .custom-item"
    ).click();

    //Typing contact name
    cy.get("#stringField5").type("Automation");

    //Selecting contact number
    cy.get(".iti__arrow").click();
    cy.get("#country-search-box").type("Bangladesh");
    cy.get("#iti-0__item-bd > .iti__country-name").click();
    cy.get("#phone").type("+8801939594524");

    //Selecting Location
    cy.get("#geoField0").type("Dhaka");

    //Typing Email
    cy.get("#stringField6").type("mahfuzshanto12@gmail.com");

    //click Save Button

    cy.get("#actionBtns > .dx-button-default").click();
  });
});
