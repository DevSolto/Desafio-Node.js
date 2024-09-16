"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthorized = void 0;
const error_1 = require("./error");
class Unauthorized extends error_1.CustomError {
    constructor() {
        super("Passwords don't match", 404);
    }
}
exports.Unauthorized = Unauthorized;
