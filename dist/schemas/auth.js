"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginBody = void 0;
const easy_cpf_1 = require("easy-cpf");
const zod_1 = require("zod");
exports.loginBody = zod_1.z.object({
    cpf: zod_1.z.string().min(11, "CPF must have at least 11 characters").max(14, "CPF must not exceed 14 characters").refine(easy_cpf_1.cpf.validate, 'CPF is not valide'),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
});
