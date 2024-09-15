import { CustomError } from "@/errors/error";
import { loginBody } from "@/schemas/auth";
import { loginService } from "@/services/auth";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { ZodError } from "zod";

export async function authController(app: FastifyInstance) {
  app.post('/api/login', async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const loginParams = loginBody.parse(req.body)

      const token = await loginService(loginParams)
      console.log(token);

      res.status(200).send(token)
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