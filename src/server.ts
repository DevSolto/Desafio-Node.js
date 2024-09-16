import Fastify from "fastify"
import { userController } from "./controllers/users";
import jwt from '@fastify/jwt';
import { authController } from "./controllers/auth";
import { permissionController } from "./controllers/permissions";
import 'module-alias/register';

const app = Fastify({
  logger: true
})

app.register(authController)
app.register(userController)
app.register(permissionController)

app.register(jwt, {
  secret: process.env.SECRET || '',
});


const PORT = process.env.PORT || '3000'
const HOST = '0.0.0.0'

const start = async () => {
  try {
    await app.listen({ host: HOST, port: parseInt(PORT) });
    console.log('Server listening on http://localhost:' + PORT);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();

export default app