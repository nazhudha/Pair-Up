describe("Sign in", () => {
  it("User sees signup button", () => {
    
    cy.visit("/");

    cy.contains("Sign Up").should("be.visible")
    
    
    
  });
  xit("User can click on sign up and log in to acebook", () => {
    
    cy.visit("/");
    cy.contains("Sign Up").click();


    cy.contains("First name:").type("Chris")
    cy.get("#lastName").type("Brown") 
    cy.get("#next").click();

    
    cy.contains("What's your coding level?").should("be.visible")
    
    
    
  });
});