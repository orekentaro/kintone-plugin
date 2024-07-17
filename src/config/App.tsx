import { FC, useEffect, useState } from "react";
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
import { backPage, getFormInfo, requiredParams } from "../utils/kintone";
import Header from "../components/Header";
import RadioButton from "../components/molecules/RadioButton";
import Checkbox from "../components/molecules/Checkbox";

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
    requiredParams.forEach((key) => {
      console.log(kintoneConfig[key]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title={"Plugin Sample!!!"} subTitle={"Write plugin detail!"} />
      <BackGroundColorSpace ms={3}>
        <TextField
          className="pb-2"
          configKey="name"
          label="Text Field"
          size={50}
          config={config}
          setConfig={setConfig}
          onChange={(event) => {
            console.log(event);
          }}
        />
        <Dropdown
          value={config.field}
          items={values}
          onChange={(event) => {
            console.log(event);
          }}
          configKey="field"
          config={config}
          setConfig={setConfig}
          label="フィールド名"
        />
        <Checkbox
          LabelName="スクロールした際にタブを画面上部に固定する"
          name="scroll"
          value="scroll"
          className="pb-2 ms-2"
          configKey="checked"
          config={config}
          setConfig={setConfig}
          onInput={(event) => {
            console.log(event);
          }}
        />
        <RadioButton
          options={[
            { label: "ラジオボタンA", value: "0" },
            { label: "ラジオボタンB", value: "1" },
            { label: "ラジオボタンC", value: "2" },
          ]}
          value={config.radio}
          label="選択して下さい"
          configKey="radio"
          config={config}
          setConfig={setConfig}
          onClick={(event) => {
            console.log(event);
          }}
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
