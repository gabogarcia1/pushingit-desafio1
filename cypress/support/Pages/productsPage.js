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
}