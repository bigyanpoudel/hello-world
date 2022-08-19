import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "lib",
      formats: ["es", "umd"],
      fileName: (format) => `@bigyanpoudel/hello-world-v10.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
