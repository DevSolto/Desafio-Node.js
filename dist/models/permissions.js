"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPermissionModel = createPermissionModel;
exports.getPermissionByName = getPermissionByName;
const prisma_1 = require("@/utils/prisma");
async function createPermissionModel(data) {
    return await prisma_1.prisma.permission.create({
        data
    });
}
async function getPermissionByName(name) {
    return prisma_1.prisma.permission.findUnique({
        where: {
            name
        }
    });
}
