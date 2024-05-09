import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("settings")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App PLUGIN_ID={kintone.$PLUGIN_ID} />
    </RecoilRoot>
  </React.StrictMode>
);
