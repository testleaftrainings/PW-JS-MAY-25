
import { test } from "@playwright/test";

test(`Learn Xpath using Leaftaps`,async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);

    await page.locator(`//input[@id='password']`).fill(`crmsfa`);

    await page.locator(`//input[@class='decorativeSubmit']`).click();
    
    await page.waitForTimeout(2000);

    await page.locator(`//a[contains(text(),"CRM")]`).click();  

    //

     await page.locator(`//a[text()="Create Lead"]`).click(); 
})