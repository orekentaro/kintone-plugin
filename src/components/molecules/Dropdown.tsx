import { ChangeEventHandler, FC } from "react";
import { makeRandomString } from "../../utils/make";
import Label from "../atoms/Label";
import ErrorLabel from "../atoms/Error";

export type DropDownValue = { key: string; value: string };
type Props = {
  items: DropDownValue[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  label?: string;
  bold?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const Dropdown: FC<Props> = ({
  items,
  className = "",
  error = "",
  label = "",
  value = "",
  bold = false,
  disabled = false,
  required = false,
  onChange = undefined,
}) => {
  const domId = makeRandomString();
  const itemList = items.map((v) => (
    <option key={v.key} value={v.key} selected={value === v.key}>
      {v.value}
    </option>
  ));
  return (
    <div id={domId} className={className}>
      <Label label={label} bold={bold} required={required} />
      <div className="kintoneplugin-select-outer">
        <div className="kintoneplugin-select">
          <select onChange={onChange} disabled={disabled}>
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
