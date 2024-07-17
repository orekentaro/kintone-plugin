import { ChangeEventHandler, FC } from "react";
import { makeRandomString } from "../../utils/make";
import Label from "../atoms/Label";
import ErrorLabel from "../atoms/Error";
import { ConfigState } from "../../types/config";
import { SetterOrUpdater } from "recoil";

export type DropDownValue = { key: string; value: string };
type Props = {
  configKey: keyof ConfigState;
  items: DropDownValue[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  label?: string;
  bold?: boolean;
  size?: number;
  config?: ConfigState;
  setConfig?: SetterOrUpdater<ConfigState>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const Dropdown: FC<Props> = ({
  items,
  configKey,
  className = "",
  error = "",
  label = "",
  value = "",
  bold = false,
  disabled = false,
  required = false,
  size = 25,
  onChange = undefined,
  config = undefined,
  setConfig = undefined,
}) => {
  const domId = makeRandomString();
  const target = config ? config[configKey] : value;
  const itemList = items.map((v) => (
    <option key={v.key} value={v.key} selected={target === v.key}>
      {v.value}
    </option>
  ));

  const handleDropdownChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    if (setConfig) {
      const newField = event.target.value;
      setConfig((prevConfig) => ({
        ...prevConfig,
        [configKey]: newField !== undefined ? newField : prevConfig[configKey],
      }));
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <div id={domId} className={className}>
      <Label label={label} bold={bold} required={required} />
      <div className="kintoneplugin-select-outer">
        <div className="kintoneplugin-select" style={{ width: `${size}rem` }}>
          <select onChange={handleDropdownChange} disabled={disabled}>
            <option hidden>選択してください</option>
            {itemList}
          </select>
        </div>
      </div>
      {error && <ErrorLabel error={error} />}
    </div>
  );
};

export default Dropdown;
