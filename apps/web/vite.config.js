import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@utils": path.resolve(__dirname, "../../packages/utils/src"),
      "@types": path.resolve(__dirname, "../../packages/types/src"),
      "@config": path.resolve(__dirname, "../../packages/config/src"),
    },
  },
});
