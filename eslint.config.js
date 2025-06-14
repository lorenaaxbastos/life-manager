import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import tsParser from "@typescript-eslint/parser";

const baseDirectory = fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({ baseDirectory, recommendedConfig: true });

export default [
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:react-hooks/recommended"),
  ...compat.extends("plugin:prettier/recommended"),

  {
    ignores: ["node_modules/**", "dist/**", "build/**", "**/*.min.js", "*.log", "coverage", ".env"],
  },

  {
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        React: "readonly",
        URL: "readonly",
        process: "readonly",
        __dirname: "readonly",
        test: "readonly",
        expect: "readonly",
        jest: "readonly",
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect",
        jsxRuntime: "automatic",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-cond-assign": "error",
      "no-constant-condition": "warn",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-ex-assign": "error",
      "no-func-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-prototype-builtins": "warn",
      "no-regex-spaces": "error",
      "no-sparse-arrays": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "use-isnan": "error",
      "valid-typeof": ["error", { requireStringLiterals: true }],
      "no-redeclare": "error",
      "no-self-assign": "error",
      "no-shadow-restricted-names": "error",
      "no-unused-labels": "error",
      "no-useless-catch": "warn",
    },
  },
];
