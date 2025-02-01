import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Use "node" for backend-only tests
    include: ["tests/unit/**/*.test.ts"], // Only include unit tests
    exclude: ["tests/e2e/**", "playwright/**", "**/*.spec.ts"], // Ignore E2E tests
    setupFiles: "./vitest.setup.ts", // Optional setup file
    coverage: {
      provider: "v8", // Use "c8" for alternative coverage reporting
      reporter: ["text", "html"],
    },
  },
});
