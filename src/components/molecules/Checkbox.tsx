import {
  FC,
  ChangeEventHandler,
  useState,
  MouseEventHandler,
  useEffect,
} from "react";
import { makeMargeClassName, makeRandomString } from "../../utils/make";
type Props = {
  name: string;
  value: string;
  LabelName: string;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  visible?: boolean;
  onInput?: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: FC<Props> = ({
  LabelName,
  name,
  value,
  className = "",
  disabled = false,
  checked = false,
  onInput = undefined,
}) => {
  const domId = makeRandomString();
  const checkboxId = makeRandomString();
  const margeClassName = makeMargeClassName(
    "kintoneplugin-input-checkbox",
    className
  );
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange: MouseEventHandler<HTMLInputElement> = () => {
    switch (isChecked) {
      case true:
        setIsChecked(false);
        break;
      case false:
        setIsChecked(true);
        break;
    }
  };
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  return (
    <div id={domId} className={margeClassName}>
      <span className="kintoneplugin-input-checkbox-item">
        <input
          type="checkbox"
          name={name}
          value={value}
          id={checkboxId}
          disabled={disabled}
          onInput={onInput}
          checked={isChecked}
          onClick={handleCheckboxChange}
        />
        <label htmlFor={checkboxId}>{LabelName}</label>
      </span>
    </div>
  );
};

export default Checkbox;
