import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("settings")!).render(
  <React.StrictMode>
    <App PLUGIN_ID={kintone.$PLUGIN_ID} />
  </React.StrictMode>
);
