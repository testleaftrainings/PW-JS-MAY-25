"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSignUp = void 0;
var EmployeeSignUp = /** @class */ (function () {
    function EmployeeSignUp() {
        this.eName = "Ravi";
        EmployeeSignUp.eid = "eid123";
        this.ephno = 9898989;
        this.eSalary = 213123;
    }
    EmployeeSignUp.prototype.printDetails = function () {
        console.log("The emp details ".concat(this.eName, ":").concat(EmployeeSignUp.eid, ":").concat(this.ephno, ":").concat(this.eSalary));
    };
    Object.defineProperty(EmployeeSignUp.prototype, "readData", {
        get: function () {
            return this.eSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeSignUp.prototype, "writeData", {
        set: function (salar) {
            this.eSalary = salar;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeSignUp;
}());
exports.EmployeeSignUp = EmployeeSignUp;
var emp = new EmployeeSignUp();
emp.printDetails();
var oldsal = emp.readData;
console.log(oldsal);
emp.writeData = 655656;
console.log(emp.readData);
