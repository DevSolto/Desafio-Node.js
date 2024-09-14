import { Role } from "@prisma/client";
import { ThisCpfIsAlreadyInUse } from "../errors/users";
import { createUserModel, getUserByCpfModel } from "../models/users";
import { CreateUserBody } from "../types/users";
import bcrypt from 'bcrypt';

export async function createUserService(createUserBody: CreateUserBody) {

  const userWithThisCpf = await getUserByCpfModel(createUserBody.cpf)

  if (userWithThisCpf) {
    throw new ThisCpfIsAlreadyInUse()
  }

  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(createUserBody.password, salt)

  const role = Role[createUserBody.role]

  const createdUser = await createUserModel({
    name: createUserBody.name,
    cpf: createUserBody.cpf,
    role,
    passwordHash,
    salt,
  })

  return createdUser
}