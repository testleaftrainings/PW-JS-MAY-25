"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssue = createIssue;
var axios_1 = require("axios");
var endpoint = "https://manual-testing-demoproject.atlassian.net/rest/api/2/issue";
var username = "ravindranr90@gmail.com";
var apikey = "ATATT3xFfGF0aEw0ZJSXq6wNRZiEtgj4NW2AxvMPbOBpGQCq5a4xAJ7jnhwAlf1U-sAELclr1OWyBofY-fgeUO-ciTgo0bNEz43_ses6hnm4uF-MjC2vMU1EUVidt5KdJsIKvAViWM-roy1OXSIRmA9AcWRc4TOGu8VWAguPkbIBKPV17rEFnmo=48617F9B";
var projectId = "PD";
function createIssue(summary, description) {
    return __awaiter(this, void 0, void 0, function () {
        var issueBody, reponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    issueBody = {
                        //Here for jiraapi documentation to get the POST endpoint and show swagger document to show bodayData under fields
                        "fields": {
                            "project": {
                                "key": projectId
                            },
                            "summary": summary,
                            "description": description,
                            "issuetype": {
                                "name": "Bug"
                            },
                        }
                    };
                    return [4 /*yield*/, axios_1.default.post(endpoint, issueBody, {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            auth: {
                                username: username,
                                password: apikey
                            }
                        })];
                case 1:
                    reponse = _a.sent();
                    console.log(reponse.status);
                    console.log(reponse.data);
                    return [2 /*return*/];
            }
        });
    });
}
createIssue("Learning JIRA", "Using axios to create Issue");
