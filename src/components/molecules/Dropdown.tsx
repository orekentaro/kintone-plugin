import { ChangeEventHandler, FC } from "react";
import { makeRandomString } from "../../utils/make";
import Label from "../atoms/Label";
import ErrorLabel from "../atoms/Error";

type Props = {
  items: string[];
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
  const itemList = items.map((item, index) => (
    <option key={index} value={item} selected={value === item}>
      {item}
    </option>
  ));
  return (
    <div id={domId} className={className}>
      <Label label={label} bold={bold} required={required} />
      <div className="kintoneplugin-select-outer">
        <div className="kintoneplugin-select">
          <select onChange={onChange} disabled={disabled}>
            {itemList}
          </select>
        </div>
      </div>
      {error && <ErrorLabel error={error} />}
    </div>
  );
};

export default Dropdown;
