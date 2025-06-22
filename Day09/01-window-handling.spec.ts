import { test } from "@playwright/test";

test(`Launch different context with different pages`,async ({browser}) => {

const context1 = await browser.newContext();
const page1 = await context1.newPage();
await page1.goto("https://www.flipkart.com/");
const page2 = await context1.newPage();
await page2.goto("https://www.amazon.in/");

const context2 = await browser.newContext();
const page3 = await context2.newPage();
await page3.goto("https://www.bigbasket.com/");
const page4 = await context2.newPage();
await page4.goto("https://www.snapdeal.com/");
    
})
/* Window Handling
1. Sequential way of handling windows.
2. Concurrent way of handing windows */


test(`Handling tabs sequential way`,async ({context,page}) => {
    await page.goto(`https://www.flipkart.com/`)

    const searchBox = page.locator(`//input[@placeholder="Search for Products, Brands and More"]`);
    await searchBox.fill("Phones");
    await searchBox.press("Enter");

    const newPage = context.waitForEvent('page'); //Event listner listening to click action and shifting focus from current page to child page
    await page.locator(`(//div[contains(text(),'MOTOROLA g05')])[1]`).click();
    const childPage = await newPage;

    console.log(await childPage.title());

    console.log(await page.title());

    const price = await childPage.locator(`//div[@class='Nx9bqj CxhGGd']`).innerText();
    console.log(price);

    await page.bringToFront();

    await page.locator(`//span[text()='Electronics']`).click();
    await page.waitForTimeout(3000);
    await page.close();
        
})

test.only(`Handling multiple windows in concurrent way`, async ({context, page}) => {

    await page.goto(`https://leafground.com/window.xhtml`);

    const [multiplePage] = await Promise.all([ //run both action pararllely --> waits for pagr open and click
    (context.waitForEvent('page'), 
    page.getByText(`Open Multiple`,{exact:true}).click())]) // as soon as we click this button our event listener should be ready to listen to the click and act accordingly

    /* Option2 :
    const [newPage1, newPage2] = await Promise.all([
        context.waitForEvent('page'),
        context.waitForEvent('page'),
        page.getByText('Open Multiple', { exact: true }).click()
    ]); 
    
    Important Note :
   1. Now Promise.all() waits for two pages to open and for the button to be clicked — in parallel.

   2. Array Destructuring :  It's unpacking the array returned by Promise.all into individual variables (newPage1, newPage2).

    const [newPage1, newPage2] = ... is array destructuring — it assigns:

    newPage1 → first resolved value (first page)

    newPage2 → second resolved value (second page)

 **We’re intentionally ignoring the third item (the click result, undefined), because we don’t need it. */

    const allPages = context.pages();

    console.log(allPages.length);    
    await allPages[0].title();

    for(let pg of allPages){
        console.log(page.url());
        console.log(await page.title());
    }
})