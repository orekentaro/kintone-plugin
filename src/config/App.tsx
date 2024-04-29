import { FC } from "react";
import type { PluginId } from "../types/config";
import Header from "../components/Header";
import TextField from "../components/atoms/TextField";
import DropdownWithFormInfo from "../components/atoms/DropdownWithFormInfo";
import ButtonGroup from "../components/molecules/ButtonGroup";
import BackGroundColorSpace from "../components/atoms/BackGroundColorSpace";

const App: FC<PluginId> = ({ PLUGIN_ID }) => {
  console.log(PLUGIN_ID);
  return (
    <>
      <Header title={"Plugin Sample!!!"} subTitle={"Write plugin detail"} />
      <BackGroundColorSpace ms={3}>
        <TextField
          className="pb-2"
          label="Text Field"
          onChange={(event) => console.log(event)}
        />
        <DropdownWithFormInfo
          className="pb-2"
          fieldCode={["DATE", "SINGLE_LINE_TEXT"]}
        />
      </BackGroundColorSpace>
      <ButtonGroup
        className="justify-content-between"
        cancelText="戻る"
        confirmText="登録"
        onConfirmClick={(event) => console.log(event)}
        onCancelClick={(event) => console.log(event)}
      />
    </>
  );
};

export default App;
