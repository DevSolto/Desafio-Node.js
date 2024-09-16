// middlewares/auth.ts
import { FastifyReply, FastifyRequest } from "fastify";
import { isAuthPayload } from "@/types/auth";

export async function authMiddleware(req: FastifyRequest, res: FastifyReply) {
  try {
    const decoded = await req.jwtVerify();

    if (isAuthPayload(decoded)) {
      req.user = decoded;
    } else {
      throw new Error('Invalid token structure');
    }
  } catch (err) {
    res.status(401).send({ message: 'Unauthorized' });
  }
}
