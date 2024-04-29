import { FC } from "react";
import type { PluginId } from "../types/config";
import Header from "../components/Header";
import TextField from "../components/atoms/TextField";
import DropdownWithFormInfo from "../components/atoms/DropdownWithFormInfo";
import ButtonGroup from "../components/molecules/ButtonGroup";

const App: FC<PluginId> = ({ PLUGIN_ID }) => {
  console.log(PLUGIN_ID);
  return (
    <>
      <Header title={"Plugin Sample!!!"} subTitle={"Write plugin detail"} />
      <TextField label="Text Field" onChange={(event) => console.log(event)} />
      <DropdownWithFormInfo fieldCode={["DATE", "SINGLE_LINE_TEXT"]} />
      <ButtonGroup
        cancelText="戻る"
        confirmText="登録"
        onConfirmClick={() => console.log("confirm")}
        onCancelClick={() => console.log("cancel")}
      />
    </>
  );
};

export default App;
