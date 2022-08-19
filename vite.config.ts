import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/hello-world.tsx"),
      name: "ReactFeatureFlag",
      fileName: (format) => `hello-world.${format}.js`, //put the name of your lib
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
