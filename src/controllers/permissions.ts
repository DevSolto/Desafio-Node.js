// controllers/permissions.ts
import { CustomError } from "@/errors/error";
import { authMiddleware } from "@/middlewares/auth";
import { createPermissionSchema } from "@/schemas/permissions";
import { createPermissionService } from "@/services/permissions";
import { AuthPayload } from "@/types/auth";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

export async function permissionController(app: FastifyInstance) {
  app.post('/api/permissions', { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const createPermissionBody = createPermissionSchema.parse(req.body);

      const user = req.user as AuthPayload;
      console.log(user);

      const createdPermission = await createPermissionService(user.role, createPermissionBody);
      res.status(200).send(createdPermission);
      
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.message);
      } else if (error instanceof CustomError) {
        res.status(error.statusCode).send({
          name: error.name,
          message: error.message,
        });
      } else {
        res.status(500).send(error instanceof Error ? error.message : 'Unknown error');
      }
    }
  });
}
