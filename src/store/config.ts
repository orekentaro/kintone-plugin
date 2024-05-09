import { atom } from "recoil";
import { ConfigState } from "../types/config";

export const configState = atom<ConfigState>({
  key: "configState",
  default: { name: "", field: "" },
});
