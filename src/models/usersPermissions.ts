import { CreateUsersPermissionsParams } from "@/types/usersPermissions";
import { prisma } from "@/utils/prisma";

export async function createUsersPermissionsModel(data:CreateUsersPermissionsParams) {
  return await prisma.usersPermissions.create({
    data
  })
}