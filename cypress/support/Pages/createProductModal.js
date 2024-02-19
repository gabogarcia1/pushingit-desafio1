export class CreateProductModal {
    constructor() {
        this.productName = "#productName"
        this.productPrice = "#productPrice"
        this.productCard = "#productCard"
        this.productID = "#productID"
        this.createProductButton = 'button[data-cy="createProduct"]'
        this.closeModal='#closeModal'

    }
    checkUrl() {
        cy.url().should('include', this.url)
    }

    addProductName(name) {
        cy.get(this.productName).type(name)
    }
    addProductPrice(price) {
        cy.get(this.productPrice).type(price)

    }
    addProductCard(img) {
        cy.get( this.productCard).type(img)


    }
    addProductID(id) {
        cy.get(this.productID).type(id)
    }


    addProduct(name,price,img,id) {
        this.addProductName(name)
        this.addProductPrice(price)
        this.addProductCard(img)
        this.addProductID(id)
        cy.get(this.createProductButton).click()
    }

    clickOncloseModal() {
        cy.get(this.closeModal).click()
    }


}