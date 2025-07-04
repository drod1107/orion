// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Standard JS/TS files
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },

  // Global browser & node
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  // TypeScript recommended (spread if it's an array)
  ...tseslint.configs.recommended,

  // React recommended (single object, not spread)
  pluginReact.configs.flat.recommended,

  // JSON
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  { files: ["**/*.json5"], plugins: { json }, language: "json/json5", extends: ["json/recommended"] },

  // Markdown
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },

  // CSS
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },

  // STORYBOOK: Specific files configuration
  {
    files: [
      "**/*.stories.@(js|jsx|ts|tsx|mdx)",
      "**/*.story.@(js|jsx|ts|tsx|mdx)"
    ],
    plugins: { 
      storybook 
    },
    rules: {
      ...storybook.configs.recommended.rules
    }
  },

  // General React rule overrides
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
]);