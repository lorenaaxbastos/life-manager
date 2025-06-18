import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

const baseDirectory = fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({ baseDirectory, recommendedConfig: true });

const baseRules = {
  "react/react-in-jsx-scope": "off",
  "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
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
};

export default [
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:react-hooks/recommended"),
  ...compat.extends("plugin:prettier/recommended"),

  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/*.min.js",
      "**/*.log",
      "**/coverage/**",
      "**/.env",
    ],
  },

  {
    files: ["apps/api/**", "**/*.test.ts", "**/*.test.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: baseRules,
  },

  {
    files: ["apps/web/**", "**/*.tsx", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        React: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
        jsxRuntime: "automatic",
      },
    },
    rules: baseRules,
  },

  {
    files: ["apps/web/**/vite.config.ts", "apps/web/**/*.config.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
  },
];
