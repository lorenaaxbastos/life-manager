import { prisma } from "../../prisma";
import { ICreateUser } from "@types";

export async function findAllUsers() {
  return prisma.user.findMany();
}

export async function createUser(data: ICreateUser) {
  return prisma.user.create({ data });
}
