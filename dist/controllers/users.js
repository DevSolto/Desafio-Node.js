"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = userController;
const users_1 = require("../schemas/users");
const users_2 = require("../services/users");
const zod_1 = require("zod");
const auth_1 = require("../middlewares/auth");
const error_1 = require("@/errors/error");
async function userController(app) {
    app.post('/api/users', { preHandler: auth_1.authMiddleware }, async (req, res) => {
        try {
            const createUserBody = users_1.createUserSchema.parse(req.body);
            const createdUser = await (0, users_2.createUserService)(createUserBody);
            res.status(200).send(createdUser);
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                res.status(400).send(error.message);
            }
            else if (error instanceof error_1.CustomError) {
                res.status(error.statusCode).send({
                    name: error.name,
                    message: error.message
                });
            }
            else {
                res.status(500).send(error);
            }
        }
    });
    app.get('/api/users', async (_req, res) => {
        try {
            const users = await (0, users_2.getUsersService)();
            res.status(200).send(users);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
