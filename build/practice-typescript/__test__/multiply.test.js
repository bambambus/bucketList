"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var multiply_1 = require("../multiply");
(0, globals_1.describe)("multiply values", function () {
    (0, globals_1.test)("times 3 and 2 to equal 6", function () {
        (0, globals_1.expect)((0, multiply_1.default)(3, 2)).toBe(6);
    });
    (0, globals_1.test)("times 1 and 0 to equal 0", function () {
        (0, globals_1.expect)((0, multiply_1.default)(1, 0)).toBe(0);
    });
});
//# sourceMappingURL=multiply.test.js.map