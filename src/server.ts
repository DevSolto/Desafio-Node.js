import Fastify from "fastify"
import { userController } from "./controllers/users";
import jwt from 'fastify-jwt';
import { authController } from "./controllers/auth";
import { permissionController } from "./controllers/permissions";

const app = Fastify({
  logger: true
})

app.register(authController)
app.register(userController)
app.register(permissionController)

app.register(jwt, {
  secret: process.env.SECRET || '',
});


const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Server listening on http://localhost:3000');
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();

export default app