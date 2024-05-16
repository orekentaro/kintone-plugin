import { exec } from "child_process";
import chokidar from "chokidar";

let isScriptRunning = false;
let timeoutId = null;

const directoryToWatch = "./src";
const watcher = chokidar.watch(directoryToWatch);

watcher.on("change", (path) => {
  if (!isScriptRunning) {
    isScriptRunning = true;
    // 1. スクリプトの実行中に新しいファイルの変更を無視する
    clearTimeout(timeoutId);
    // 2. スクリプトの実行中に新しい変更があれば、以前の実行をキャンセルして新しい実行を予約する
    timeoutId = setTimeout(() => {
      console.log(`\x1b[35mChange file: ${path}`);
      exec("npm run move:static", () => {
        console.log("\x1b[32mStart");
      });
      exec("npm run webpack", (error, stdout) => {
        if (error) {
          console.error(`\x1b[31mWatcher error: ${error}`);
          console.log(`stdout: ${stdout}`);
          return;
        }
        exec("npm run kintone", (error1, stdout1) => {
          if (error) {
            console.error(`\x1b[31mWatcher error: ${error1}`);
            console.log(`stdout: ${stdout1}`);
            return;
          }
          console.log("\x1b[36mUploading...");
          exec("npm run upload", (error2, stdout2) => {
            if (error2) {
              console.error(`\x1b[31mWatcher error: ${error2}`);
              console.log(`stdout: ${stdout2}`);
              return;
            }
            console.log("\x1b[32mDone");
            isScriptRunning = false;
          });
        });
      });
    }, 1000);
  } else {
    // 3. スクリプトの実行中に新しい変更があれば、待機時間をリセットしてからスクリプトの実行を再スケジュールする
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      isScriptRunning = false;
    }, 1000);
  }
});

watcher.on("error", (error) => {
  console.error(`\x1b[31mWatcher error: ${error}`);
});
