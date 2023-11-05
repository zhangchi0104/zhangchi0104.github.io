const react = require("eslint-plugin-react");
const tsParser = require("@typescript-eslint/parser");
const globals = require("globals");
const ts = require("@typescript-eslint/eslint-plugin");
const importRules = require("eslint-plugin-import");
module.exports = [
  {
    plugins: {
      react,
      "@typescript-eslint": ts,
      import: importRules
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
            requireLast: true
          }
        }
      ],
      "multiline-ternary": ["error", "always"]
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
