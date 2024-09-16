import { CreatePermissionParams } from "@/types/permissions";
import { prisma } from "@/utils/prisma";

export async function createPermissionModel(data: CreatePermissionParams) {
  return await prisma.permission.create({
    data
  })
}

export async function getPermissionByNameModel(name: string) {
  return await prisma.permission.findUnique({
    where: {
      name
    }
  })
}

export async function deletePermissionByIdModel(id: string) {
  return await prisma.permission.delete({
    where: {
      id
    }
  })
}

export async function getPermissionsModel() {
  return await prisma.permission.findMany()
}