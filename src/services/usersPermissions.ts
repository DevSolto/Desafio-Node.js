import { Unauthorized } from "@/errors/auth";
import { createUsersPermissionsModel } from "@/models/usersPermissions";
import { CreateUsersPermissionsParams } from "@/types/usersPermissions";

export async function createUsersPermissionsService(role: string, createUsersPermissionsParams: CreateUsersPermissionsParams) {

  if (role !== 'ADMIN') {
    throw new Unauthorized()
  }

  return await createUsersPermissionsModel(createUsersPermissionsParams)
}