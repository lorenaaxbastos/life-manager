/** @type {import("ts-jest").JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};
