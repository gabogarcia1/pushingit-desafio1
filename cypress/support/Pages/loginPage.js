export class LoginPage{
    constructor(){
        this.usernameInput= "#user";
        this.passwordInput = "#pass";
        this.loginButton = "#submitForm"
    }

    escribirUsuario(usuario){
        cy.get(this.usernameInput).type(usuario)
    }
    escribirPassword(password){
        cy.get(this.passwordInput).type(password)
    }
    clickLoginButton(){
        cy.get(this.loginButton).click()
    }

    login(usuario,password){
        this.escribirUsuario(usuario)
        this.escribirPassword(password)
        this.clickLoginButton()
    }

}