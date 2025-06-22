import { expect, test } from "@playwright/test";
import path from "path";

test.only(`FileUpload with type="file"`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const uploadFile = page.locator(`(//input[@type='file'])[1]`);

    /* Option1 : Uploading file from Data folder */
    //   await uploadFile.setInputFiles("Data/learningFileUpload.txt");

    /* Option2 : Uploading file from Data folder using absolute path of the current file  */

    await uploadFile.setInputFiles([path.join(__dirname, '../../Data/learningFileUpload.txt')])

    /* Note : __dirname gives the current file's folder path. So you move up or down the directory tree as needed.
    -->tests/Day9/ → tests → PW-JS-MAY-25-MAIN → then into Data/ */

    await page.waitForTimeout(3000);


})

test(`Multiple FileUpload`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const MultipleUpload = page.locator(`(//input[@type='file'])[2]`);
    await MultipleUpload.setInputFiles(["Data/BackGround Removed.png", "Data/WebEx_PlayWright_BG.png"]);
    await page.waitForTimeout(3000);


})

test(`FileUpload with no type="file" attribute`, async ({ page }) => {

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent('filechooser');
    page.locator(`#drag-drop-upload`).click();
    const fileUpload = await filePromise;

    await fileUpload.setFiles("Data/WebEx_PlayWright_BG.png")
    await page.waitForTimeout(3000)


})

/* Important Note:

await uploadFile.setInputFiles([path.join(__dirname, '../../Data/learningFileUpload.txt')])

---

### Project structure:

PW-JS-MAY-25-MAIN/
├── Data/
│   └── learningFileUpload.txt    ← The file to be uploaded
│
├── tests/
│   └── Day9/
│       └── 02-fileUpload.spec.ts   ← The test file using the path

---

### Now let’s break down this line:


path.join(__dirname, '../../Data/learningFileUpload.txt')


#### 1. `__dirname`

* `__dirname` is a special Node.js variable that gives the absolute path of the current file.
* In this case, since the file is `tests/Day9/02-fileUpload.spec.ts`, `__dirname` = `.../tests/Day9`

#### 2. `'../../Data/learningFileUpload.txt'`

* `'..'` goes **up one level**: from `Day9` → `tests`
* Another `'..'` goes **up again**: from `tests` → root folder (`PW-JS-MAY-25-MAIN`)
* `'Data/learningFileUpload.txt'` moves **into the Data folder** and grabs the file

---

### So the full path resolves to:

PW-JS-MAY-25-MAIN/Data/learningFileUpload.txt

---
Playwright supports uploading **multiple files**, so `setInputFiles()` accepts either:

* A string (for one file), or
* An array of strings (for multiple files)

Even for one file, wrapping in `[]` is acceptable:

await uploadFile.setInputFiles([filePath]); //  One file, in array
await uploadFile.setInputFiles(filePath);   //  One file, direct
*/