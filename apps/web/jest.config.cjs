/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)?(spec|test).[tj]s?(x)"],
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js"],
};
