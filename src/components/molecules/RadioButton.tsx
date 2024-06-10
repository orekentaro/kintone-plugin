import { ChangeEventHandler, FC, MouseEventHandler } from "react";
import Label from "../atoms/Label";
import ErrorLabel from "../atoms/Error";
import { makeRandomString } from "../../utils/make";

export type RadioButtonValue = { label: string; value: string };
type Props = {
  options: RadioButtonValue[];
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
  value = "",
  className = "",
  error = "",
  label = "",
  bold = false,
  required = false,
  onChange = undefined,
  onClick = undefined,
}) => {
  const domId = makeRandomString();

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
              checked={value === option.value}
              onClick={onClick}
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
