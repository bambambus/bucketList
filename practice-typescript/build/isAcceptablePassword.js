"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAcceptablePassword(password) {
    return password.toString().length > 6 ? true : false;
}
exports.default = isAcceptablePassword;
console.log(isAcceptablePassword("short"));
//# sourceMappingURL=isAcceptablePassword.js.map