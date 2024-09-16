"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPermissionService = createPermissionService;
const permissions_1 = require("@/errors/permissions");
const users_1 = require("@/errors/users");
const permissions_2 = require("@/models/permissions");
const client_1 = require("@prisma/client");
async function createPermissionService(role, createPermissionParams) {
    if (role !== client_1.Role['ADMIN']) {
        throw new users_1.UserDoesNotHaveTheRequiredRole();
    }
    const permissionWithThisName = await (0, permissions_2.getPermissionByName)(createPermissionParams.name);
    if (permissionWithThisName) {
        throw new permissions_1.ThisNameIsAlreadyInUse();
    }
    return await (0, permissions_2.createPermissionModel)(createPermissionParams);
}
