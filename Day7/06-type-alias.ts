//Type alias

//Union Type alias - |

type usernameDatatype = string | number | boolean;

let userID: usernameDatatype = "ravi@testleaf.com";
userID = 9989098;
userID = true


//Intesection type alias - &

type Admin = {
    adminName: string,
    privileges: string[],
    Adminage: number

}

type Emp = {
    name: string,
    empId: number,
    date: string,
    Empage:number
}

type elibilityQA = Admin & Emp;

const QAUserProfile: elibilityQA = { // explicitly telling the compiler to hold 
    adminName: "Testleaf",
    privileges: ["Server"],
    Adminage: 30,
    name: "Ravindran",
    empId: 123,
    date: "04/11/2024",

}
