// vitest.config.js
import { defineConfig } from "vitest/config";
const dotenv = require("dotenv");

dotenv.config({ path: ".env.test" });

export default defineConfig({
  test: {
    globals: true, // agar chai expect etc global chahiye
    environment: "node", // backend ke liye "node"
    coverage: {
      reporter: ["text", "json", "html"], // optional
    },
  },
});
