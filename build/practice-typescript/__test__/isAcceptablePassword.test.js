"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var isAcceptablePassword_1 = require("../isAcceptablePassword");
(0, globals_1.describe)("check if password length is acceptable", function () {
    (0, globals_1.test)("password length less than 6 characters should return false", function () {
        (0, globals_1.expect)((0, isAcceptablePassword_1.default)("short")).toBe(false);
    });
    (0, globals_1.test)("password length more than 6 characters should return false", function () {
        (0, globals_1.expect)((0, isAcceptablePassword_1.default)("looooong")).toBe(true);
    });
});
//# sourceMappingURL=isAcceptablePassword.test.js.map