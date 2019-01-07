import 'cypress-testing-library/add-commands';

describe('BranchPicker', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h4', 'Empresas')
    cy.get('.column.companies > .item > .select-item > .info > p > :nth-child(2)')
      .click()
    cy.contains('h4', 'Almacenes')
    cy.get('.column.companies > .item > .select-item > .info > p > :nth-child(2)')
      .click()
  })
})

describe('CompanyList', () => {
  it('It renders companies', () => {
    cy.visit('http://localhost:8080/')
    cy.getByText('Artículos para el hogar SA de CV').should('exist')
  })

  it('Renders branches according to selection', function () {
    cy.getByText('Artículos para el hogar SA de CV')
      .click()
    cy.getByText('Coyoacán').should('exist')
  })
})

