import { makeRandomString } from "../utils/make";

const PLUGIN_ID = kintone.$PLUGIN_ID;
kintone.events.on("app.record.index.show", (event) => {
  const kintoneConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  console.log(makeRandomString());
  console.log(kintoneConfig);
  return event;
});
