import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgx from "@svgx/vite-plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgx()],
  base: "/trolley-mapper/",
});
