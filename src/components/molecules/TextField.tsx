import { ChangeEventHandler, FC, FocusEventHandler } from "react";
import { makeMargeClassName, makeRandomString } from "../../utils/make";
import Label from "../atoms/Label";
import ErrorLabel from "../atoms/Error";
import { ConfigState } from "../../types/config";
import { SetterOrUpdater } from "recoil";

type Props = {
  configKey: keyof ConfigState;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  label?: string;
  value?: string;
  bold?: boolean;
  size?: number;
  config?: ConfigState;
  setConfig?: SetterOrUpdater<ConfigState>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};
const TextField: FC<Props> = ({
  configKey,
  id = "",
  className = "",
  error = "",
  label = "",
  value = "",
  bold = false,
  size = 100,
  required = false,
  disabled = false,
  onChange = undefined,
  onFocus = undefined,
  config = undefined,
  setConfig = undefined,
}) => {
  const domId = makeRandomString();
  const inputId = id === "" ? makeRandomString() : id;
  const combinedClasses = makeMargeClassName(
    "kintoneplugin-input-outer",
    className
  );

  const handleTextFieldChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (setConfig) {
      const newName = event.target.value;
      setConfig((prevConfig) => ({
        ...prevConfig,
        [configKey]: newName !== undefined ? newName : prevConfig[configKey],
      }));
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <div id={domId} className={combinedClasses}>
      <Label label={label} required={required} bold={bold} />
      <input
        id={inputId}
        className="kintoneplugin-input-text"
        onChange={handleTextFieldChange}
        onFocus={onFocus}
        value={config ? config[configKey] : value}
        disabled={disabled}
        required={required}
        type="text"
        size={size}
      />
      {error && <ErrorLabel error={error} />}
    </div>
  );
};

export default TextField;
