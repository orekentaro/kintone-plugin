import { exec } from "child_process";
import chokidar from "chokidar";

const directoryToWatch = "./src";
const watcher = chokidar.watch(directoryToWatch);

watcher.on("change", (path) => {
  console.log(`\x1b[35mchange file: ${path}`);
  console.log("\x1b[32mstart");
  exec("npm run move:static", () => {
    exec("npm run webpack", () => {
      exec("npm run kintone", () => {
        console.log("\x1b[36muploading...");
        exec("npm run upload", () => {
          console.log("\x1b[32mdone");
        });
      });
    });
  });
});

watcher.on("error", (error) => {
  console.error(`\x1b[31mWatcher error: ${error}`);
});
