// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("Empresas");

    cy.contains("Soluciones").should("not.have.class", "active");
    cy.contains("Soluciones")
      .click()
      .should("have.class", "active");

    cy.contains("Almacenes");

    cy.contains("ALMACEN").click();
    cy.get(".active").should("contain", "ALMACEN");
  });
});
