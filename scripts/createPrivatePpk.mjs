// @ts-check
import fs from "fs";
import path from "path";

try {
  // eslint-disable-next-line no-undef
  const root = process.cwd();
  const distPath = path.join(root, "dist", "private.ppk");
  const files = fs.readdirSync("dist");
  const target = files.filter((file) => file.indexOf(".ppk") !== -1);
  const ppkPath = path.join(root, "dist", target[0]);
  fs.renameSync(ppkPath, distPath);
} catch (error) {
  console.error(error);
}
