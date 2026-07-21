import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all network addresses (required for custom host mapping)
    host: true,
    // Optional: Specify a custom port (defaults to 5173)
    port: 3000,
  },
});
