// types/fastify.d.ts
import 'fastify';
import { AuthPayload } from '@/types/auth';

declare module 'fastify' {
  interface FastifyRequest {
    user: AuthPayload
  }
}
