import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createUserSchema } from "../schemas/users";
import { createUserService, getUsersService } from "../services/users";
import { CustomError } from "../errors/users";
import { ZodError } from "zod";
import { authMiddleware } from "@/middlewares/auth";

export async function userController(app: FastifyInstance) {
  app.post('/api/users', { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const createUserBody = createUserSchema.parse(req.body)

      const createdUser = await createUserService(createUserBody)
      console.log(createdUser);

      res.status(200).send(createdUser)
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.message)
      } else if (error instanceof CustomError) {
        res.status(error.statusCode).send({
          name: error.name,
          message: error.message
        })
      } else {
        res.status(500).send(error.message)
      }
    }
  })
  app.get('/api/users', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const users = await getUsersService()
      res.status(200).send(users)
    } catch (error) {
      res.status(500).send(error)
    }
  })

}