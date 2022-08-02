describe("", () => {
  it("User sees signup button", () => {
    
    cy.visit("/");

    cy.contains("Sign up").should("be.visible")
    
    
    
  });

  it("User can click on sign up and see the name inputs", () => {
    
    cy.visit("/");
    cy.contains("Sign up").click();


    cy.get("input[name=fname]").should("be.visible")
    cy.get("input[name=lname]").should("be.visible")

    
  });
  it("User can click next and see the skills options", () => {
    
    cy.visit("/");
    cy.contains("Sign up").click();

    cy.get("input[name=fname]").type("Paddy")
    cy.get("input[name=lname]").type("Reynolds")

    cy.contains("NEXT").click();


    cy.get("input[name=beginner]").should("be.visible")
    cy.get("input[name=intermediate]").should("be.visible")
    cy.get("input[name=expert]").should("be.visible")

    
  });
  it("User wont progress if either the name fields are empty", () => {
    
    cy.visit("/");
    cy.contains("Sign up").click();

    cy.get(':button').should('be.disabled')

    
  });
  it("User wont progress if either the first name field is empty", () => {
    
    cy.visit("/");
    cy.contains("Sign up").click();

    // cy.get("input[name=fname]").type("Paddy")
    cy.get("input[name=lname]").type("Reynolds")

    cy.get(':button').should('be.disabled')

    
  });
  it("User wont progress if either the last name field is empty", () => {
    
    cy.visit("/");
    cy.contains("Sign up").click();

    cy.get("input[name=fname]").type("Paddy")
    // cy.get("input[name=lname]").type("Reynolds")

    cy.get(':button').should('be.disabled')

    
  });
});