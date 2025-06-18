import { FastifyInstance } from "fastify";
import { getUsers, createUser } from "./controller";

export async function userRoute(app: FastifyInstance): Promise<void> {
  app.get("/users", getUsers);
  app.post("/users", createUser);
}
