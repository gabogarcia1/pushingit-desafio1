/// <reference types="cypress"/>

import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/productsPage";
import { LoginPage } from "../support/Pages/loginPage";
import { RegistroPage } from "../support/Pages/registerPage";
import { CreateProductModal } from "../support/Pages/createProductModal";


describe('Pre Entrega', () => {
  let datosUsuario, productos;
  const homePage = new HomePage();
  const productPage = new ProductsPage();
  const loginPage = new LoginPage()
  const registerPage = new RegistroPage()
  const createProductModal = new CreateProductModal()

  before('Set Up', () => {
    cy.fixture("userData").then(datos => {
      datosUsuario = datos;
    })
    cy.fixture("products").then(prods => {
      productos = prods;
    })

  })
  beforeEach("Crear usuario y loguarse", () => {
    cy.visit('/')

    registerPage.clickIniciarSesionButton()
    loginPage.login(datosUsuario.usuario, datosUsuario.password)
  })



  it('Hacer click en show total price y verificar el precio acumulado de 2 productos', () => {
    homePage.clickOnlineShop();
    productPage.clickOnAddProduct()
    createProductModal.addProduct(productos.PrimerProducto.nombre, productos.PrimerProducto.precio, productos.PrimerProducto.img, productos.PrimerProducto.id)
    cy.get('p').contains(`${productos.PrimerProducto.nombre} has been added`).should('exist')

    createProductModal.clickOncloseModal()

    productPage.selectFilterById()
    productPage.filterProductById(productos.PrimerProducto.id)
    cy.get(productPage.productName).contains(productos.PrimerProducto.nombre).should('have.length', 1)

    cy.get(productPage.productPrice).contains(productos.PrimerProducto.precio).should('have.length', 1)


    cy.wait(3000)
    productPage.deleteProdById(productos.PrimerProducto.id)
    cy.get('p').contains(`${productos.PrimerProducto.nombre} has been deleted`).should('exist')
    cy.get(productPage.closeModal).click()
    productPage.filterProductById(productos.PrimerProducto.id)
    cy.get(productPage.productName).contains(productos.PrimerProducto.nombre).should('not.exist')

  })
})