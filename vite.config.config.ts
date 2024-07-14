import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "plugin",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        config: "./src/config/index.ts",
      },
      output: {
        format: "module",
        preserveModules: false,
        entryFileNames: "js/[name].js",
      },
    },
  },
  publicDir: "src/static",
});
