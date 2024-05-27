import { ChangeEventHandler, FC, FocusEventHandler } from "react";
import { makeMargeClassName, makeRandomString } from "../../utils/make";
import Label from "../atoms/Label";
import ErrorLabel from "../atoms/Error";

type Props = {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  label?: string;
  value?: string;
  bold?: boolean;
  size?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};
const TextField: FC<Props> = ({
  id,
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
}) => {
  const domId = makeRandomString();
  const inputId = id === "" ? makeRandomString() : id;
  const combinedClasses = makeMargeClassName(
    "kintoneplugin-input-outer",
    className
  );
  return (
    <div id={domId} className={combinedClasses}>
      <Label label={label} required={required} bold={bold} />
      <input
        id={inputId}
        className="kintoneplugin-input-text"
        onChange={onChange}
        onFocus={onFocus}
        value={value}
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
