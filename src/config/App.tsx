import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
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
  const onChecked: ChangeEventHandler<HTMLInputElement> = (event) => {
    const checked = String(event.target.checked) as "true" | "false";
    setConfig((prevConfig) => ({
      ...prevConfig,
      checked: checked,
    }));
  };
  const onClick: MouseEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    setConfig((prevConfig) => ({
      ...prevConfig,
      radio: input.value,
    }));
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
          label="Text Field"
          onChange={handleTextFieldChange}
          value={config.name}
          size={50}
          error="error!!!"
        />
        <Dropdown
          value={config.field}
          items={values}
          onChange={handleDropdownChange}
          label="フィールド名"
        />
        <Checkbox
          LabelName="スクロールした際にタブを画面上部に固定する"
          name="scroll"
          value="scroll"
          className="pb-2 ms-2"
          onInput={onChecked}
          checked={config.checked === "true"}
        />
        <RadioButton
          options={[
            { label: "ラジオボタンA", value: "0" },
            { label: "ラジオボタンB", value: "1" },
            { label: "ラジオボタンC", value: "2" },
          ]}
          value={config.radio}
          label="選択して下さい"
          onClick={onClick}
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
