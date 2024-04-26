import { exec } from "child_process";
import { config } from "dotenv";
config();

const {
  KINTONE_BASE_URL,
  KINTONE_USERNAME,
  KINTONE_PASSWORD,
  KINTONE_BASIC_AUTH_USERNAME = "",
  KINTONE_BASIC_AUTH_PASSWORD = "",
  // eslint-disable-next-line no-undef
} = process.env;
if (!KINTONE_BASE_URL || !KINTONE_USERNAME || !KINTONE_PASSWORD) {
  throw new Error("env settings are insufficient.");
}

let command = "kintone-plugin-uploader dist/plugin.zip --base-url";
command += ` ${KINTONE_BASE_URL} --username ${KINTONE_USERNAME} --password ${KINTONE_PASSWORD}`;
if (KINTONE_BASIC_AUTH_USERNAME && KINTONE_BASIC_AUTH_PASSWORD) {
  command += ` --basic-auth-username ${KINTONE_BASIC_AUTH_USERNAME} --basic-auth-password ${KINTONE_BASIC_AUTH_PASSWORD}`;
}
command += " --watch --waiting-dialog-ms 3000";

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
console.log("success upload");
