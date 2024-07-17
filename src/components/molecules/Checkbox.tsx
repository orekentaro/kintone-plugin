import {
  FC,
  ChangeEventHandler,
  useState,
  MouseEventHandler,
  useEffect,
} from "react";
import { makeMargeClassName, makeRandomString } from "../../utils/make";
import { ConfigState } from "../../types/config";
import { SetterOrUpdater } from "recoil";
type Props = {
  configKey: keyof ConfigState;
  name: string;
  value: string;
  LabelName: string;
  config: ConfigState;
  setConfig: SetterOrUpdater<ConfigState>;
  className?: string;
  disabled?: boolean;
  visible?: boolean;
  onInput?: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: FC<Props> = ({
  LabelName,
  name,
  value,
  configKey,
  config,
  setConfig,
  className = "",
  disabled = false,
  onInput = undefined,
}) => {
  const domId = makeRandomString();
  const checkboxId = makeRandomString();
  const margeClassName = makeMargeClassName(
    "kintoneplugin-input-checkbox",
    className
  );

  const checked = config[configKey] === "true";
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

  const onChecked: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (setConfig) {
      const c = String(event.target.checked) as "true" | "false";
      setConfig((prevConfig) => ({
        ...prevConfig,
        [configKey]: c,
      }));
    }
    if (onInput) {
      onInput(event);
    }
  };
  useEffect(() => {
    setIsChecked(config[configKey] === "true");
  }, [checked, config, configKey]);
  return (
    <div id={domId} className={margeClassName}>
      <span className="kintoneplugin-input-checkbox-item">
        <input
          type="checkbox"
          name={name}
          value={value}
          id={checkboxId}
          disabled={disabled}
          onInput={onChecked}
          checked={isChecked}
          onClick={handleCheckboxChange}
        />
        <label htmlFor={checkboxId}>{LabelName}</label>
      </span>
    </div>
  );
};

export default Checkbox;
