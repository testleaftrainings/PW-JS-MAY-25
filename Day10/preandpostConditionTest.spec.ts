import { test } from "@playwright/test";

test.use({storageState:'Data/login_LTY.json'})
test.beforeEach(`Login Functionality`,async ({page}) => {
    console.log("Create a Lead");

  /*   await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`democsr`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();    
    await page.waitForTimeout(2000); */
    
})

test(`Lead Module`,async ({page}) => {
    
})

test(`Account Module`,async ({page}) => {
    
})

test.afterEach(`Fetch the test status oof each test`,async () => {
    
})

test.afterAll(`Upload all the attachements`,async () => {
    console.log("Running after all the test");
    
})