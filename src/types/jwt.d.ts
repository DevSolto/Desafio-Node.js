
import '@fastify/jwt';

declare module 'fastify' {
  interface FastifyRequest {
    jwtVerify: () => Promise<any>;
  }

  interface FastifyInstance {
    jwt: {
      sign: (payload: object, options?: import('@fastify/jwt').SignOptions) => string;
      verify: (token: string, options?: import('@fastify/jwt').VerifyOptions) => object;
      decode: (token: string, options?: import('@fastify/jwt').DecodeOptions) => object | null;
    };
  }
}
