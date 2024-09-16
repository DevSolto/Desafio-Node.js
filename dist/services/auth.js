"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = loginService;
const auth_1 = require("../errors/auth");
const users_1 = require("../errors/users");
const users_2 = require("../models/users");
const server_1 = __importDefault(require("../server"));
const bcrypt_1 = __importDefault(require("bcrypt"));
async function loginService(loginParams) {
    const userWithThisCpf = await (0, users_2.getUserByCpfModel)(loginParams.cpf);
    if (!userWithThisCpf) {
        throw new users_1.UserNotFound();
    }
    const thePasswordMatch = await bcrypt_1.default.compare(loginParams.password, userWithThisCpf.passwordHash);
    if (!thePasswordMatch) {
        throw new auth_1.Unauthorized();
    }
    const token = server_1.default.jwt.sign({
        id: userWithThisCpf.id,
        role: userWithThisCpf.role
    }, {
        expiresIn: '100h'
    });
    return { token };
}
