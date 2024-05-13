import { defineConfig } from "vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1024 * 1024 * 2,
    outDir: "plugin",
    rollupOptions: {
      input: {
        config: "./src/config/index.ts",
        desktop: "./src/desktop/index.ts",
      },
      output: {
        entryFileNames: "js/[name].js",
      },
    },
  },
  publicDir: "src/static",
});
