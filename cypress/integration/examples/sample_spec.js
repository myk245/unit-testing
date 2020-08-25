// sample test
// describe('My First Test', () => {
//    it('Does not do much!', () => {
//       expect(true).to.equal(true)
//    })
// })

// Visit: https://example.cypress.io
// Find the element with content: type
// Click on it
// Get the URL
// Assert it includes: /commands/actions
// Get the input with the.action - email class
//    Type `fake@email.com` into the input
// Assert the input reflects the new value

// describe('Visit Test', () => {
//    it('Visits the Kitchen Sink', () => {
//       cy.visit('https://example.cypress.io')
//    })
// })

// describe('Find Test', () => {
//    it('finds the content "type"', () => {
//       cy.visit('https://example.cypress.io')

//       cy.contains('type')
//    })
// })

// describe('Click Test', () => {
//    it('clicks the link "type"', () => {
//       cy.visit('https://example.cypress.io')

//       cy.contains('type').click()
//    })
// })

// describe('Assertion Test', () => {
//    it('clicking "type" navigates to a new url', () => {
//       cy.visit('https://example.cypress.io')

//       cy.contains('type').click()

//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
//    })
// })

// Putting it all together
describe('My First Test', () => {
   it('Gets, types, and asserts', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')

      // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
         .type('fake@email.com')
         .should('have.value', 'fake@email.com')
   })
})