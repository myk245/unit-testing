// sample test
// describe('My First Test', () => {
//    it('Does not do much!', () => {
//       expect(true).to.equal(true)
//    })
// })

describe('Visit Test', () => {
   it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
   })
})

describe('Find Test', () => {
   it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type')
   })
})

describe('Click Test', () => {
   it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()
   })
})

describe('Assertion Test', () => {
   it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
   })
})