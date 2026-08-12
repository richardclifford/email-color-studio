import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setUpTests.jsx"],
    testTimeout: 10000, // Extend global test limit to 10 seconds
    hookTimeout: 10000, // Extend beforeEach/afterEach limit
  },
});
