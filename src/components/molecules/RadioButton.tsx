import { ChangeEventHandler, FC, MouseEventHandler } from "react";
import Label from "../atoms/Label";
import ErrorLabel from "../atoms/Error";
import { makeRandomString } from "../../utils/make";
import { ConfigState } from "../../types/config";
import { SetterOrUpdater } from "recoil";

export type RadioButtonValue = { label: string; value: string };
type Props = {
  configKey: keyof ConfigState;
  options: RadioButtonValue[];
  config: ConfigState;
  setConfig: SetterOrUpdater<ConfigState>;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  label?: string;
  bold?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
};

const RadioButton: FC<Props> = ({
  options,
  config,
  setConfig,
  configKey,
  className = "",
  error = "",
  label = "",
  bold = false,
  required = false,
  onChange = undefined,
  onClick = undefined,
}) => {
  const domId = makeRandomString();

  const onClickRadio: MouseEventHandler<HTMLInputElement> = (event) => {
    if (setConfig) {
      const input = event.target as HTMLInputElement;
      setConfig((prevConfig) => ({
        ...prevConfig,
        radio: input.value,
      }));
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div id={domId} className={className}>
      <Label label={label} bold={bold} required={required} />
      <div className="kintoneplugin-input-radio">
        {options.map((option) => (
          <span className="kintoneplugin-input-radio-item">
            <input
              type="radio"
              name="radio"
              value={option.value}
              id={option.label}
              onChange={onChange}
              checked={config[configKey] === option.value}
              onClick={onClickRadio}
            />
            <label htmlFor={option.label}>{option.label}</label>
          </span>
        ))}
      </div>
      {error && <ErrorLabel error={error} />}
    </div>
  );
};

export default RadioButton;
