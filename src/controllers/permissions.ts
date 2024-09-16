// controllers/permissions.ts
import { CustomError } from "@/errors/error";
import { authMiddleware } from "@/middlewares/auth";
import { id } from "@/schemas/all";
import { createPermissionSchema } from "@/schemas/permissions";
import { createPermissionService, deletePermissionByIdService, getPermissionsService } from "@/services/permissions";
import { IdParams } from "@/types/all";
import { AuthPayload } from "@/types/auth";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

export async function permissionController(app: FastifyInstance) {
  app.post('/api/permissions', { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const createPermissionBody = createPermissionSchema.parse(req.body);

      const user = req.user as AuthPayload;

      const createdPermission = await createPermissionService(user.role, createPermissionBody);
      res.status(201).send(createdPermission);
      
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
  })
  app.delete('/api/permissions/:id', { preHandler: authMiddleware }, async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const params:IdParams = req.params as IdParams
      const permissionId = id.parse(params.id);

      const user = req.user as AuthPayload;

      const deletedPermission = await deletePermissionByIdService(user.role, permissionId)
      res.status(200).send(deletedPermission);
      
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
  })
  app.get('/api/permissions', async (_req: FastifyRequest, res: FastifyReply) => {
    try {
      const permissions = await getPermissionsService()
      res.status(200).send(permissions)
    } catch (error) {
      res.status(500).send(error)
    }
  })
}
