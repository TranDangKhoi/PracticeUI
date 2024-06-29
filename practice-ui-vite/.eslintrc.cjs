const path = require("path");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        // Fix a path bug causing the root directory is not the current project - ESLint bug
        paths: [path.resolve(__dirname, "")],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "always",
        semi: true,
        trailingComma: "all",
        tabWidth: 2,
        endOfLine: "auto",
        useTabs: false,
        singleQuote: false,
        printWidth: 120,
        jsxSingleQuote: false,
        singleAttributePerLine: true,
      },
    ],
  },
};
