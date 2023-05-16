"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var numberLength_1 = require("../numberLength");
(0, globals_1.describe)("verify number values", function () {
    (0, globals_1.test)("should return a two ", function () {
        (0, globals_1.expect)((0, numberLength_1.default)(55)).toBe(2);
    });
    (0, globals_1.test)("should return a single value", function () {
        (0, globals_1.expect)((0, numberLength_1.default)(5)).toBe(1);
    });
});
//# sourceMappingURL=numberLength.test.js.map