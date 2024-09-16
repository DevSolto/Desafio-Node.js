import { CreatePermissionParams } from "@/types/permissions";
import { prisma } from "@/utils/prisma";

export async function createPermissionModel(data: CreatePermissionParams) {
  return await prisma.permission.create({
    data
  })
}

export async function getPermissionByName(name: string) {
  return prisma.permission.findUnique({
    where:{
      name
    }
  })
}