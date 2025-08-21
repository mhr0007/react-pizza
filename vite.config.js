import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true,
      emitError: false, // ⬅️ This prevents the build from breaking
    }),
    tailwindcss(),
  ],
  server: {
    hmr: {
      overlay: false,
    },
  },
});
