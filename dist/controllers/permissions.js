"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionController = permissionController;
// controllers/permissions.ts
const error_1 = require("@/errors/error");
const auth_1 = require("@/middlewares/auth");
const permissions_1 = require("@/schemas/permissions");
const permissions_2 = require("@/services/permissions");
const zod_1 = require("zod");
async function permissionController(app) {
    app.post('/api/permissions', { preHandler: auth_1.authMiddleware }, async (req, res) => {
        try {
            const createPermissionBody = permissions_1.createPermissionSchema.parse(req.body);
            const user = req.user;
            console.log(user);
            const createdPermission = await (0, permissions_2.createPermissionService)(user.role, createPermissionBody);
            res.status(200).send(createdPermission);
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                res.status(400).send(error.message);
            }
            else if (error instanceof error_1.CustomError) {
                res.status(error.statusCode).send({
                    name: error.name,
                    message: error.message,
                });
            }
            else {
                res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
            }
        }
    });
}
