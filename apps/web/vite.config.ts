import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@types": path.resolve(__dirname, "../../packages/types/src"),
      "@utils": path.resolve(__dirname, "../../packages/utils/src"),
    },
  },
});
