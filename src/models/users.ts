import { CreateUserParams } from "../types/users";
import { prisma } from "../utils/prisma";

export async function createUserModel(data: CreateUserParams) {
  return await prisma.user.create({
    data
  })
}

export async function getUserByCpfModel(cpf: string) {
  return await prisma.user.findUnique({
    where: {
      cpf
    }
  })
}
export async function getUsersModel() {
  return await prisma.user.findMany({
  })
}