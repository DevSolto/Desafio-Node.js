"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const auth_1 = require("@/types/auth");
async function authMiddleware(req, res) {
    try {
        const decoded = await req.jwtVerify();
        if ((0, auth_1.isAuthPayload)(decoded)) {
            req.user = decoded;
        }
        else {
            throw new Error('Invalid token structure');
        }
    }
    catch (err) {
        res.status(401).send({ message: 'Unauthorized' });
    }
}
