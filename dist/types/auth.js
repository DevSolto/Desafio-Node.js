"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthPayload = isAuthPayload;
function isAuthPayload(value) {
    return (typeof value === 'object' &&
        value !== null &&
        typeof value.id === 'string' &&
        (value.role === 'ADMIN' || value.role === 'USER') &&
        typeof value.iat === 'number' &&
        typeof value.exp === 'number');
}
