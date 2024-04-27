import { FC } from "react";
import type { PluginId } from "../types/config";
import Header from "../components/Header";
import TextField from "../components/atoms/TextField";
import Button from "../components/atoms/Button";

const App: FC<PluginId> = ({ PLUGIN_ID }) => {
  console.log(PLUGIN_ID);
  return (
    <>
      <Header title={"Plugin Sample!!!"} subTitle={"Write plugin detail"} />
      <TextField label="Text Field" onChange={(event) => console.log(event)} />
      <Button text="button" onClick={(event) => console.log(event)} />
    </>
  );
};

export default App;
