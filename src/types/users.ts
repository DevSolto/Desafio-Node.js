import { Role } from "@prisma/client"
import { z } from "zod"
import { createUserSchema } from "../schemas/users"

export type CreateUserParams = {
  name: string
  cpf: string
  role: Role
  passwordHash: string
}

export type CreateUserBody = z.infer<typeof createUserSchema>