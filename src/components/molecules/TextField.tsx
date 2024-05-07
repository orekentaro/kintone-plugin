// docs
// https://ui-component.kintone.dev/ja/docs/components/desktop/text

import { ChangeEvent, FC } from "react";
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
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void | undefined;
  onFocus?: (event?: ChangeEvent<HTMLInputElement>) => void | undefined;
};
const TextField: FC<Props> = ({
  id,
  className = "",
  error = "",
  label = "",
  value = "",
  bold = false,
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
      />
      {error && <ErrorLabel error={error} />}
    </div>
  );
};

export default TextField;
