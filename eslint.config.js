const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({ recommendedConfig: true });

module.exports = [
  {
    root: true,
    ignores: ["dist", "node_modules"],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ),
  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "prettier/prettier": ["error"],
      "react/react-in-jsx-scope": "off",
    },
  },
];
