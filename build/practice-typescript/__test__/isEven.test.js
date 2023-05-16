"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var isEven_1 = require("../isEven");
(0, globals_1.describe)("check if number is even", function () {
    (0, globals_1.test)("even value should return true", function () {
        (0, globals_1.expect)((0, isEven_1.default)(2)).toBe(true);
    });
    (0, globals_1.test)("value for odd number should return false", function () {
        (0, globals_1.expect)((0, isEven_1.default)(3)).toBe(false);
    });
});
//# sourceMappingURL=isEven.test.js.map