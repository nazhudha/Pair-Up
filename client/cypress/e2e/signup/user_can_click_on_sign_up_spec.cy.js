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


    cy.get("input[value=Beginner]").should("be.visible")
    cy.get("input[value=Intermediate]").should("be.visible")
    cy.get("input[value=Expert]").should("be.visible")

    
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


    cy.get(':button').should('be.disabled')

    
  });
  it("User can click next on the skills page to get to the credentials page", () => {
    
    cy.visit("/");
    cy.contains("Sign up").click();

    cy.get("input[name=fname]").type("Paddy")
    cy.get("input[name=lname]").type("Reynolds")

    cy.contains("NEXT").click();


    cy.get("input[value=Beginner]").check()

    cy.contains("NEXT").click();

    cy.get("input[name=ruby]").should("be.visible")
    
    cy.contains("NEXT").click();

    cy.get("input[name=email]").should("be.visible")
    cy.get("input[name=password]").should("be.visible")
    cy.get("input[name=password2]").should("be.visible")
    cy.get("input[name=postcode]").should("be.visible")

  });
  it("User can't submit until all credential fields are filled", () => {
    
    cy.visit("/");
    cy.contains("Sign up").click();

    cy.get("input[name=fname]").type("Paddy")
    cy.get("input[name=lname]").type("Reynolds")

    cy.contains("NEXT").click();


    cy.get("input[value=Beginner]").check()

    cy.contains("NEXT").click();

    cy.get("input[name=ruby]").should("be.visible")
    
    cy.contains("NEXT").click();

    cy.get(':button').should('be.disabled')

  });
});