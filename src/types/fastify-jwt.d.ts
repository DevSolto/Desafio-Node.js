declare module 'fastify-jwt' {
  import { FastifyPluginCallback } from 'fastify';

  interface FastifyJWTOptions {
    secret: string | { private: string; public: string };
    sign?: object;
    verify?: object;
    cookie?: {
      cookieName: string;
    };
  }

  const fastifyJwt: FastifyPluginCallback<FastifyJWTOptions>;
  export default fastifyJwt;
}
