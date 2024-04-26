((PLUGIN_ID) => {
  kintone.events.on("app.record.index.show", (event) => {
    console.log(PLUGIN_ID);
    return event;
  });
})(kintone.$PLUGIN_ID);
