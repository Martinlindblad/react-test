
describe('did form render?', function () {
  it('Creating a New Post', function () {
    cy.visit('/')     // 1.

    cy
      .get('input')
      .should('be.visible')
      .should(($input) => {

        expect($input).to.have.length(3)
      })

    cy.get('input[name="name"]')
      .type('kalle')   // 3.
      .should('not.have.value', 'Jane')
      .should('have.value', 'kalle')

    cy.get('input[name="job"]')
      .type('ingenjör')   // 3.
      .should('not.have.value', 'Jane')
      .should('have.value', 'ingenjör')
      
    cy.get('input[type="button"]')
      .click(); // 3.
  })

  it('Remove one of the characters', function () {
    cy.visit('/')

    cy
    .get('input')
    .should('be.visible')
    .should(($input) => {

      expect($input).to.have.length(3)
    })

  cy.get('input[name="name"]')
    .type('kalle')   // 3.
    .should('not.have.value', 'Jane')
    .should('have.value', 'kalle')

  cy.get('input[name="job"]')
    .type('ingenjör')   // 3.
    .should('not.have.value', 'Jane')
    .should('have.value', 'ingenjör')
    
  cy.get('input[type="button"]')
    .click(); // 3.

  // Second input 

  cy.get('input[name="name"]')
    .type('jonas')   // 3.
    .should('not.have.value', 'Jane')
    .should('have.value', 'jonas')

  cy.get('input[name="job"]')
    .type('fritids ninja')   // 3.
    .should('not.have.value', 'Jane')
    .should('have.value', 'fritids ninja')

  cy.get('input[type="button"]')
    .click(); // 3.

    cy.get('.btn--delete')
    .should('be.visible')
      .should(($input) => {
        expect($input).to.have.length(2)
      })
      
      cy.get('.btn--delete').first()
      .click()
          .should(($input) => {
            expect($input).to.have.length(1)
          })

  })
})