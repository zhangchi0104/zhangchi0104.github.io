const react = require("eslint-plugin-react");
const tsParser = require("@typescript-eslint/parser");
const globals = require("globals");
const ts = require("@typescript-eslint/eslint-plugin");
const importRules = require("eslint-plugin-import");
const unusedImports = require("eslint-plugin-unused-imports");
module.exports = [
  {
    plugins: {
      react,
      "@typescript-eslint": ts,
      import: importRules,
      "unused-imports": unusedImports
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true
        },
        ecmaVersion: 2020,
        project: "./tsconfig.json"
      },
      globals: {
        ...globals.browser
      }
    },
    files: ["src/**/*.tsx", "src/**/*.ts"],
    rules: {
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/no-unused-vars": ["off"],
      "no-unused-vars": ["off"],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/quotes": ["error", "double"],
      "@typescript-eslint/comma-dangle": ["error", "never"],
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true
          },
          singleline: {
            delimiter: "semi",
            requireLast: false
          }
        }
      ],
      "multiline-ternary": ["off"]
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
