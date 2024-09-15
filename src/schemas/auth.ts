import { cpf } from "easy-cpf";
import { z } from "zod";
  
export const loginBody = z.object({
  cpf: z.string().min(11, "CPF must have at least 11 characters").max(14, "CPF must not exceed 14 characters").refine(cpf.validate, 'CPF is not valide'),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})