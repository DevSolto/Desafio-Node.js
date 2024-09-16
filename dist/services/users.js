"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = createUserService;
exports.getUsersService = getUsersService;
const client_1 = require("@prisma/client");
const users_1 = require("../errors/users");
const users_2 = require("../models/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function createUserService(createUserBody) {
    const userWithThisCpf = await (0, users_2.getUserByCpfModel)(createUserBody.cpf);
    if (userWithThisCpf) {
        throw new users_1.ThisCpfIsAlreadyInUse();
    }
    const salt = await bcrypt_1.default.genSalt(10);
    const passwordHash = await bcrypt_1.default.hash(createUserBody.password, salt);
    const role = client_1.Role[createUserBody.role];
    const createdUser = await (0, users_2.createUserModel)({
        name: createUserBody.name,
        cpf: createUserBody.cpf,
        role,
        passwordHash,
    });
    return createdUser;
}
async function getUsersService() {
    return await (0, users_2.getUsersModel)();
}
