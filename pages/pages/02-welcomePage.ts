import { LoginPage } from "./01-loginPage";


export class WelcomePage extends LoginPage{


    async clickCRM(){

        await this.lppage.locator(`//a[contains(text(),"CRM")]`).click()
    }

      async clickLogout(){
        await this.lppage.locator(`.decorativeSubmit`).click()
    }
}