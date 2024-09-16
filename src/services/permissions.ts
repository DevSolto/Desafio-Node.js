import { ThisNameIsAlreadyInUse } from "@/errors/permissions";
import { UserDoesNotHaveTheRequiredRole } from "@/errors/users";
import { createPermissionModel, getPermissionByName } from "@/models/permissions";
import { CreatePermissionParams } from "@/types/permissions";
import { Role } from "@prisma/client";

export async function createPermissionService(role: string, createPermissionParams: CreatePermissionParams) {
  if (role !== Role['ADMIN']) {
    throw new UserDoesNotHaveTheRequiredRole()
  }

  const permissionWithThisName = await getPermissionByName(createPermissionParams.name)

  if (permissionWithThisName) {
    throw new ThisNameIsAlreadyInUse()
  }

  return await createPermissionModel(createPermissionParams)
}