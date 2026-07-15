import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";

/**
 * Dedicated complexity gate (run via `npm run complexity`). Kept separate so the
 * thresholds are explicit and the pre-commit hook can report it as its own step.
 */
export default tseslint.config(
  { ignores: ["dist", "dist-server", "node_modules", "scripts", "*.config.js", "*.config.ts"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parser: tseslint.parser, ecmaVersion: 2022, sourceType: "module" },
    plugins: { sonarjs },
    rules: {
      complexity: ["error", 15],
      "max-depth": ["error", 4],
      "max-nested-callbacks": ["error", 4],
      "sonarjs/cognitive-complexity": ["error", 15],
    },
  },
);
