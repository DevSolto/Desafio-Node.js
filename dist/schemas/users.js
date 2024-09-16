"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
const easy_cpf_1 = require("easy-cpf");
const client_1 = require("@prisma/client");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    cpf: zod_1.z.string().min(11, "CPF must have at least 11 characters").max(14, "CPF must not exceed 14 characters").refine(easy_cpf_1.cpf.validate, 'CPF is not valide'),
    role: zod_1.z.nativeEnum(client_1.Role).default('SALLER'),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
});
