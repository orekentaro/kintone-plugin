import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "plugin", // 出力ディレクトリを指定
    rollupOptions: {
      // エントリーポイントを設定
      input: {
        config: "./src/config/index.ts", // config/index.ts を dist/js/config.js に出力
        desktop: "./src/desktop/index.ts", // desktop/index.ts を dist/js/desktop.js に出力
        mobile: "./src/mobile/index.ts", // mobile/index.ts を dist/js/mobile.js に出力
      },
      // 出力ファイル名の設定
      output: {
        entryFileNames: "js/[name].js", // エントリーポイント名で出力
      },
    },
  },
  publicDir: "src/static",
});
