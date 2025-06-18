export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export type ICreateUser = Omit<User, "id" | "createdAt">;
