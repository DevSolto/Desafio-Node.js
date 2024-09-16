"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const users_1 = require("./controllers/users");
const jwt_1 = __importDefault(require("@fastify/jwt"));
const auth_1 = require("./controllers/auth");
const permissions_1 = require("./controllers/permissions");
require("module-alias/register");
const app = (0, fastify_1.default)({
    logger: true
});
app.register(auth_1.authController);
app.register(users_1.userController);
app.register(permissions_1.permissionController);
app.register(jwt_1.default, {
    secret: process.env.SECRET || '',
});
const start = async () => {
    try {
        await app.listen({ port: 3000 });
        console.log('Server listening on http://localhost:3000');
    }
    catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
start();
exports.default = app;
