import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserDTO, createUserSchema } from "./schema";
import { findAllUsers, createUser as createUserService } from "./service";
import { ICreateUser } from "@types";
import { success, failure, HttpResponse } from "../../lib/http";

export async function getUsers(_: FastifyRequest, reply: FastifyReply): Promise<HttpResponse> {
  const users = await findAllUsers();
  return reply.code(200).send(success(users));
}

export async function createUser(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<HttpResponse> {
  const parsedResult = createUserSchema.safeParse(request.body);

  if (!parsedResult.success) {
    const { formErrors, fieldErrors } = parsedResult.error.flatten();
    return reply.code(400).send(failure("Invalid input", 400, { formErrors, fieldErrors }));
  }

  const dto: CreateUserDTO = parsedResult.data;
  const userEntity: ICreateUser = { name: dto.name, email: dto.email };

  try {
    const user = await createUserService(userEntity);
    return reply.code(201).send(success(user));
  } catch (error) {
    console.log(error);
    return reply.code(500).send(failure("Internal error", 500));
  }
}
