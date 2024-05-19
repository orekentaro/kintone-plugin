import { ChangeEventHandler, FC, useEffect, useState } from "react";
import type { ConfigState, PluginId } from "../types/config";
import BackGroundColorSpace from "../components/atoms/BackGroundColorSpace";
import {
  RecoilState,
  RecoilValue,
  useRecoilCallback,
  useRecoilState,
} from "recoil";
import { configState } from "../store/config";
import TextField from "../components/molecules/TextField";
import Dropdown, { DropDownValue } from "../components/molecules/Dropdown";
import ButtonGroup from "../components/molecules/ButtonGroup";
import { backPage, getFormInfo } from "../utils/kintone";
import Header from "../components/Header";

const App: FC<PluginId> = ({ PLUGIN_ID }) => {
  const [config, setConfig] = useRecoilState(configState);
  const [values, setValues] = useState<DropDownValue[]>([]);
  const getConfig = useRecoilCallback(
    ({ snapshot }) =>
      (
        state: RecoilState<ConfigState> | RecoilValue<ConfigState>
      ): ConfigState => {
        return snapshot.getLoadable(state).contents;
      },
    []
  );
  const handleTextFieldChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newName = event.target.value;
    setConfig((prevConfig) => ({
      ...prevConfig,
      name: newName !== undefined ? newName : prevConfig.name,
    }));
  };

  const handleDropdownChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const newField = event.target.value;
    setConfig((prevConfig) => ({
      ...prevConfig,
      field: newField !== undefined ? newField : prevConfig.field,
    }));
  };
  const setKintoneConfig = () => {
    const fixConfig = getConfig(configState);
    kintone.plugin.app.setConfig(fixConfig);
  };

  useEffect(() => {
    const kintoneConfig = kintone.plugin.app.getConfig(
      PLUGIN_ID
    ) as ConfigState;
    const getValues = async () => {
      const formInfo = await getFormInfo(["SINGLE_LINE_TEXT"]);
      const v = formInfo.map((i) => {
        return {
          key: i.code,
          value: i.label,
        };
      });
      setValues(v);
    };
    getValues();
    setConfig(kintoneConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title={"Plugin Sample!!!"} subTitle={"Write plugin detail"} />
      <BackGroundColorSpace ms={3}>
        <TextField
          className="pb-2"
          label="Text Field"
          onChange={handleTextFieldChange}
          value={config.name}
          error="error!!!"
        />
        <Dropdown
          value={config.field}
          items={values}
          onChange={handleDropdownChange}
        />
      </BackGroundColorSpace>
      <ButtonGroup
        className="justify-content-between"
        cancelText="キャンセル"
        confirmText="送信"
        onConfirmClick={setKintoneConfig}
        onCancelClick={backPage}
      />
    </>
  );
};

export default App;
