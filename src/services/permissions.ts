import { ThisNameIsAlreadyInUse } from "@/errors/permissions";
import { UserDoesNotHaveTheRequiredRole } from "@/errors/users";
import { createPermissionModel, deletePermissionByIdModel, getPermissionByNameModel, getPermissionsModel } from "@/models/permissions";
import { CreatePermissionParams } from "@/types/permissions";
import { Role } from "@prisma/client";

export async function createPermissionService(role: string, createPermissionParams: CreatePermissionParams) {
  if (role !== Role['ADMIN']) {
    throw new UserDoesNotHaveTheRequiredRole()
  }

  const permissionWithThisName = await getPermissionByNameModel(createPermissionParams.name)

  if (permissionWithThisName) {
    throw new ThisNameIsAlreadyInUse()
  }

  return await createPermissionModel(createPermissionParams)
}
export async function deletePermissionByIdService(role: string, id: string) {
  if (role !== Role['ADMIN']) {
    throw new UserDoesNotHaveTheRequiredRole()
  }

  return await deletePermissionByIdModel(id)
}

export async function getPermissionsService() {
  return await getPermissionsModel()
}