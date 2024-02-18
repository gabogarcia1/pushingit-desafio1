export class ProductsPage {
    constructor() {
        this.url = "home/onlineshop"
        this.addProduct = 'button[data-cy="add-product"]'
        this.filterSelect = '#search-type'
        this.searchBar = '#search-bar'
        this.productName='#name'
        this.productPrice='#price'
        this.deleteProductModelButton='button[id="saveEdit"]'
        this.closeModal='#closeModal'

    }
    checkUrl() {
        cy.url().should('include', this.url)
    }
    clickOnAddProduct(){
        cy.get(this.addProduct).click()

    }
    selectFilterById(){
        cy.get(this.filterSelect).select('id')
    }

    filterProductById(id){
        cy.get(this.searchBar).type(id).type('{enter}')
    }

    deleteProdById(id){
        const trashButtonById = `#delete-${id}`
        cy.get(trashButtonById).click()
        cy.get(this.deleteProductModelButton).click()
    }
    verifyMsgProductDeleted(name){
        cy.get('p').contains(`${name} has been deleted`).should('exist')
        cy.get(this.closeModal).click()
    }
   
    verifyFilteredProductNameExists(name){
        cy.get(this.productName).contains(name).should('have.length',1)
    }
    verifyFilteredProductPrice(price){
        cy.get(this.productPrice).contains(price).should('have.length',1)
    }
    verifyFilteredProductNameDoesNotExists(name){
        cy.get(this.productName).contains(name).should('not.exist')
    }
}