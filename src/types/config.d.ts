export type PluginId = {
  PLUGIN_ID: string;
};

export interface ConfigState {
  name: string;
  field: string;
  checked: "true" | "false";
  radio: string;
}
