import { FastifyInstance } from "fastify";
import { failure } from "../lib/http";

export async function errorHandler(app: FastifyInstance): Promise<void> {
  app.setErrorHandler((error, _, reply) => {
    console.log(error);

    reply
      .status(500)
      .send(
        failure(
          "Internal server error",
          500,
          process.env.NODE_ENV === "development" ? error.message : undefined,
        ),
      );
  });
}
