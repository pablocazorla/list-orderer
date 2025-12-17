import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// Dep
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
