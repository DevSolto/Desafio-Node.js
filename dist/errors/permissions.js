"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThisNameIsAlreadyInUse = void 0;
const error_1 = require("./error");
class ThisNameIsAlreadyInUse extends error_1.CustomError {
    constructor() {
        super('This name is already in use');
    }
}
exports.ThisNameIsAlreadyInUse = ThisNameIsAlreadyInUse;
