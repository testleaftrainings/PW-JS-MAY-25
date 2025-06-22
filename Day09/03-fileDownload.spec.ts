import { test } from "@playwright/test";
import path from "path";

test(`FileDownload`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent(`download`)

    page.getByText(`Download`, { exact: true }).click()

    const fDown = await filePromise;

    //  await fDown.saveAs(fDown.suggestedFilename())

    /* Option1 : Uploading file from Data folder */
    //  await fDown.saveAs("Data/MayPW.jpeg"); // we can change the location and name of the file

    /* Option2 : Uploading file from Data folder using absolute path of the current file  */
    await fDown.saveAs(path.join(__dirname, '../../Data/PW.jpeg'));

    await page.waitForTimeout(3000)

})