import Fastify from "fastify";
import { userRoute } from "./modules/users/route";
import * as process from "node:process";
import "dotenv/config";
import { errorHandler } from "./plugins/errorHandler";

const app = Fastify();

await app.register(errorHandler);
await app.register(userRoute);

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`HTTP server running at ${address}`);
});
