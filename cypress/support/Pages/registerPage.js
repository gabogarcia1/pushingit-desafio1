export class RegistroPage {

 constructor(){
    this.iniciarSesionButton = "#registertoggle"
 }   

clickIniciarSesionButton(){
    cy.get(this.iniciarSesionButton).dblclick();
}
}