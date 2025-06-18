import { execSync } from "node:child_process";
import * as path from "node:path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.test") });

if (!process.env.DATABASE_URL?.includes("localhost")) {
  throw new Error("🚫 Refusing to reset a non-local database!");
}

console.log("🔄 Reset test database...");

execSync("npx prisma migrate reset --force --skip-seed", {
  stdio: "inherit",
});
