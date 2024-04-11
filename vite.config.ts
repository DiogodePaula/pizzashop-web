import path from "node:path";

import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import type { InlineConfig } from "vitest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
    environment: "happy-dom",
  },
} as UserConfig & {
  test: InlineConfig; // isso reescreve o tipo do objeto para que ele aceite uma propriedade test, que tem o tipo InlineConfig
});
