import { defineConfig } from "vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1024 * 1024 * 2,
    outDir: "plugin",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        desktop: "./src/desktop/index.ts",
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
