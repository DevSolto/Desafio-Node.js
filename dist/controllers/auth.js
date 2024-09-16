"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = authController;
const error_1 = require("@/errors/error");
const auth_1 = require("@/schemas/auth");
const auth_2 = require("@/services/auth");
const zod_1 = require("zod");
async function authController(app) {
    app.post('/api/login', async (req, res) => {
        try {
            const loginParams = auth_1.loginBody.parse(req.body);
            const token = await (0, auth_2.loginService)(loginParams);
            console.log(token);
            res.status(200).send(token);
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
}
