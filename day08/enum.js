//Numeric enum // default
/*
enum TestResult {
Pass,
Fail,
Skip
}

function LogTestResult(testCaseName:string,result:TestResult) {

    return `Test : ${testCaseName} Result Code:${result}`
    
}

LogTestResult("LoginPage",TestResult.Pass)
LogTestResult("SignUp",TestResult.Fail)
LogTestResult("HomePage",TestResult.Skip)

//string enum

/* enum Environment {
DEV = 'https://dev.example.com',
QA = 'https://qa.example.com',
PROD = 'https://prod.example.com'
}

await page.goto(Environment.PROD); // Testcase 1
await page.goto(Environment.QA); // testcase2 */
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
    BrowserType["Edge"] = "edge";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserType) {
    console.log("Launch Browser using ".concat(browserType));
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
//heterogenous enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus["Open"] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 1] = "Incognito";
    BrowserStatus["Crash"] = "crashed";
    BrowserStatus[BrowserStatus["Close"] = 2] = "Close";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    return "Current Status of browser is ".concat(status);
}
console.log(reportBrowserStatus(BrowserStatus.Open));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.Close));
