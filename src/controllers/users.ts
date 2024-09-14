import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createUserSchema } from "../schemas/users";
import { createUserService } from "../services/users";
import { CustomError } from "../errors/users";
import { ZodError } from "zod";
import { prisma } from "../utils/prisma";

export async function userController(app: FastifyInstance) {
  app.post('/api/users', async (req: FastifyRequest, res: FastifyReply) => {
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
      }
    }
  })
  app.get('/api/users', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      res.status(200).send(await prisma.user.findMany())
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.message)
      } else if (error instanceof CustomError) {
        res.status(error.statusCode).send({
          name: error.name,
          message: error.message
        })
      }
    }
  })

}