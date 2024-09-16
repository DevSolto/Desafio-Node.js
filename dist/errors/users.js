"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDoesNotHaveTheRequiredRole = exports.UserNotFound = exports.ThisCpfIsAlreadyInUse = void 0;
const error_1 = require("./error");
class ThisCpfIsAlreadyInUse extends error_1.CustomError {
    constructor() {
        super('This CPF is already in use');
    }
}
exports.ThisCpfIsAlreadyInUse = ThisCpfIsAlreadyInUse;
class UserNotFound extends error_1.CustomError {
    constructor() {
        super('User not found', 404);
    }
}
exports.UserNotFound = UserNotFound;
class UserDoesNotHaveTheRequiredRole extends error_1.CustomError {
    constructor() {
        super('User does not have the required role', 404);
    }
}
exports.UserDoesNotHaveTheRequiredRole = UserDoesNotHaveTheRequiredRole;
