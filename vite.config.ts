import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import dts from "vite-plugin-dts";
import { existsSync, readdirSync, lstatSync, rmdirSync, unlinkSync } from "fs";
// emptyDir(path.resolve(__dirname, "types"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["./src/components"],
      beforeWriteFile: (filePath, content) => {
        console.log("filePath", filePath);
        if (filePath.includes("/dist/@types")) {
          return {
            filePath: filePath.replace("/dist/@types", "/@types/"),
            content,
          };
        }
        if (filePath.includes("/dist/component")) {
          return {
            filePath: filePath.replace("/component", ""),
            content,
          };
        }
      },
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "./src/components/component/index.ts"),
      name: "MyLib",
      formats: ["umd", "es"],
      fileName: (format) =>
        format === "umd"
          ? `lib/umd/index.${format}.js`
          : `lib/esm/index.${format}.js`,
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

function emptyDir(dir: string): void {
  if (!existsSync(dir)) {
    return;
  }

  for (const file of readdirSync(dir)) {
    const abs = path.resolve(dir, file);

    // baseline is Node 12 so can't use rmSync
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      rmdirSync(abs);
    } else {
      unlinkSync(abs);
    }
  }
}
