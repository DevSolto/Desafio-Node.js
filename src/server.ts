import Fastify from "fastify"

const app = Fastify()

app.get('/', (req, res) =>{
  res.send('hello')
})

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
