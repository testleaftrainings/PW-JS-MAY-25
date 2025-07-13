var ElementActions = /** @class */ (function () {
    function ElementActions() {
    }
    //Single implementation
    ElementActions.prototype.click = function (element, forceClick) {
        if (forceClick) {
            console.log("Forcible clicking the elment ".concat(element));
        }
        else {
            console.log("Clcikcing the element ".concat(element, " normally"));
        }
    };
    return ElementActions;
}());
var actions = new ElementActions();
actions.click("#Login");
