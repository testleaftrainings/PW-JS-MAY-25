
import { test } from "@playwright/test";

test(`Learn CSS using Leaftaps`,async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(`democsr`);

    await page.locator(`#password`).fill(`crmsfa`);

    await page.locator(`.decorativeSubmit`).click();
    
    await page.waitForTimeout(2000);

    //await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.locator(`a:has-text("CRM")`).click();  //Playwright CSS selector  
    

    //
    await page.waitForTimeout(5000);

     await page.locator(`//a[text()="Create Lead"]`).click(); 
})

//////////////////////////////////////////////////////////////////


test.only(`Learn about Starts with attribute selector (Carrot ^)`,async({page})=>{

    await page.goto(`https://www.saucedemo.com/v1/inventory.html`);

    const ADD_TO = page.locator(`div[class^=inventory_item]`);

    const productDetails = await ADD_TO.nth(0).innerText();
    console.log(productDetails);
    
    
    let countOfItems = await ADD_TO.count();

    for (let index = 0; index < countOfItems; index++) {
        const element = ADD_TO.nth(index);
        const text = await element.innerText()
    console.log(text);

     if (text.includes("Backpack")) {

        console.log("Filtered product:\n", text);
        break; // stop after finding one
    }
    }

   
    await page.waitForTimeout(2000)

    })

    ////////////////////////////////////////////////////////////////////////////////////////

    test(`Learn about ends with attribute selector(Dollar - $)`,async({page})=>{

    await page.goto(`https://www.saucedemo.com/v1/inventory.html`);

    const ADD_TO = page.locator(`button[class$='btn_inventory']`);

    let countOfItems = await ADD_TO.count();

    for (let index = 0; index < countOfItems; index++) {
        const element = ADD_TO.nth(index);
        const text = await element.innerText()
    console.log(text);
    }
    await page.waitForTimeout(2000)

    })