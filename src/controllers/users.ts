import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createUserSchema, createUsersPermissionsSchema } from "../schemas/users";
import { createUserService, getUsersService } from "../services/users";
import { ZodError } from "zod";
import { authMiddleware } from "../middlewares/auth";
import { CustomError } from "@/errors/error";
import { createUsersPermissionsService } from "@/services/usersPermissions";
import { AuthPayload } from "@/types/auth";

export async function userController(app: FastifyInstance) {
  app.post('/api/users', { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const createUserBody = createUserSchema.parse(req.body)

      const createdUser = await createUserService(createUserBody)

      res.status(201).send(createdUser)
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.message)
      } else if (error instanceof CustomError) {
        res.status(error.statusCode).send({
          name: error.name,
          message: error.message
        })
      } else {
        res.status(500).send(error)
      }
    }
  })
  app.get('/api/users', async (_req: FastifyRequest, res: FastifyReply) => {
    try {
      const users = await getUsersService()
      res.status(200).send(users)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  app.post('/api/users/permissions', { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const user = req.user as AuthPayload;

      const createUsersPermissionsBody = createUsersPermissionsSchema.parse(req.body)

      const createdUsersPermissions = await createUsersPermissionsService(user.role, {
        userId: user.id,
        permissionId: createUsersPermissionsBody.permissionId
      })

      res.status(201).send(createdUsersPermissions)
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.message)
      } else if (error instanceof CustomError) {
        res.status(error.statusCode).send({
          name: error.name,
          message: error.message
        })
      } else {
        res.status(500).send(error)
      }
    }
  })
}