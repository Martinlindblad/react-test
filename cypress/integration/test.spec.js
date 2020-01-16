
describe('did form render?', function() {
  it('Creating a New Post', function() {
    cy.visit('/')     // 1.

    cy
    .get('input')
    .should('be.visible') 
    .should(($input) => {
    
    expect($input).to.have.length(3)
    
    // expect($input.first()).to.contain('Hello World')
  })
  
  cy.get('input[name="name"]')
  .type('kalle')   // 3.
  .should('not.have.value', 'Jane')
  .should('have.value', 'kalle')
  
  cy.get('input[name="job"]')
  .type('ingenjör')   // 3.
  .should('not.have.value', 'Jane')
  .should('have.value', 'ingenjör')
  
    
  
  cy.get('input[type="submit"]')
    .click(); // 3.
  
    
  })
})