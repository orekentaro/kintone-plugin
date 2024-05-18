import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: {
    config: "./src/config/index.ts",
    desktop: "./src/desktop/index.ts",
    mobile: "./src/mobile/index.ts",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "plugin"), // pathモジュールを使用してパスを解決する
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },
};
