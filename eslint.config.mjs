import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Base configuration
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      jest: jestPlugin, // Add the Jest plugin
    },
    rules: {
      // Add your custom rules here
    },
  },
  {
    // Configuration specific to test files
    files: ["**/*.test.js", "**/*.spec.js"], // Match your test file patterns
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals, // Add Jest globals
      },
    },
    rules: {
      // Add Jest-specific rules here
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
