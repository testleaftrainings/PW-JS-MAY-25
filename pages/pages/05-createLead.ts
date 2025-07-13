import { LeadPage } from "./04-leadPage";


export class CreateLeadPage extends LeadPage{

    async enterMandatorydetails(){

        await this.lppage.fill("#createLeadForm_companyName","TestLeaf")
        await this.lppage.fill("#createLeadForm_firstName","Ravindran")
        await this.lppage.fill("#createLeadForm_lastName","R")
    }

    async clickSubmit(){
        await this.lppage.click(".smallSubmit")
    }

}