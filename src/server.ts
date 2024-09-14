import Fastify from "fastify"
import { userController } from "./controllers/users";

const app = Fastify()

app.register(userController)

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
