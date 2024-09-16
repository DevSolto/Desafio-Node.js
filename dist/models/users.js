"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserModel = createUserModel;
exports.getUserByCpfModel = getUserByCpfModel;
exports.getUsersModel = getUsersModel;
const prisma_1 = require("../utils/prisma");
async function createUserModel(data) {
    return await prisma_1.prisma.user.create({
        data
    });
}
async function getUserByCpfModel(cpf) {
    return await prisma_1.prisma.user.findUnique({
        where: {
            cpf
        }
    });
}
async function getUsersModel() {
    return await prisma_1.prisma.user.findMany({});
}
