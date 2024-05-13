import { exec } from "child_process";
import chokidar from "chokidar";

const directoryToWatch = "./src";
const watcher = chokidar.watch(directoryToWatch);

watcher.on("change", (path) => {
  console.log(`change file: ${path}`);
  console.log("start");
  exec("npm run move:static", () => {
    exec("npm run webpack", () => {
      exec("npm run kintone", () => {
        console.log("uploading...");
        exec("npm run upload", () => {
          console.log("done");
        });
      });
    });
  });
});

watcher.on("error", (error) => {
  console.error(`Watcher error: ${error}`);
});
