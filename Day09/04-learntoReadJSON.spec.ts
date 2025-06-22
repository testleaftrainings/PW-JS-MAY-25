

import {test } from "@playwright/test";
import credentials from "../../Data/login.json";

for(let data of credentials){

test(`Learn to read data from JSON ${data.TCaseId}`,async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(data.Username);

    await page.locator(`#password`).fill(data.Password);

    await page.locator(`.decorativeSubmit`).click();
    
    await page.waitForTimeout(2000);

   console.log(data.Username);
    console.log(data.Password);     
    
})
}
  
    
