import { welcomePage } from "./welcomePage";


class HomePage extends welcomePage{


    async clickLeads() {
        await this.lppage.click("//a[text()='Leads']")
    }

  async clickAccounts() {
        await this.lppage.click("//a[text()='Leads']")
    }

    async clickContact(){
         await this.lppage.click("//a[text()='Leads']")
    }
    
}