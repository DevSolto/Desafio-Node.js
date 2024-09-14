import { z } from "zod";
import { cpf } from 'easy-cpf'
import { Role } from "@prisma/client";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  cpf: z.string().min(11, "CPF must have at least 11 characters").max(14, "CPF must not exceed 14 characters").refine(cpf.validate, 'CPF is not valide'),
  role: z.nativeEnum(Role).default('SALLER'),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});