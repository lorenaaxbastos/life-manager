import Fastify from "fastify";
import { userRoute } from "./route";
import { prisma } from "../../prisma";

describe("/users route", () => {
  const app = Fastify();

  beforeAll(async () => {
    await app.register(userRoute);
  });

  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await app.close();
    await prisma.$disconnect();
  });

  it("should create a user", async () => {
    const response = await app.inject({
      method: "POST",
      path: "/users",
      payload: {
        name: "Test User",
        email: "test@example.com",
      },
    });

    expect(response.statusCode).toBe(201);
    const body = JSON.parse(response.body);
    expect(body.data).toHaveProperty("id");
  });

  it("should get all users", async () => {
    const created = await app.inject({
      method: "POST",
      path: "/users",
      payload: {
        name: "Another Test User",
        email: "another@example.com",
      },
    });

    expect(created.statusCode).toBe(201);
    const createdUser = JSON.parse(created.body).data;

    const response = await app.inject({
      method: "GET",
      path: "/users",
    });

    expect(response.statusCode).toBe(200);

    const body = JSON.parse(response.body);
    expect(body.status).toBe("success");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: createdUser.id,
          name: createdUser.name,
          email: createdUser.email,
        }),
      ]),
    );
  });
});
