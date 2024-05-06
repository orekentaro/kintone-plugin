// docs
// https://ui-component.kintone.dev/ja/docs/components/desktop/text

import { ChangeEvent, FC } from "react";
import { makeRandomString } from "../../utils/make";

type Props = {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  label?: string;
  value?: string;
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void | undefined;
  onFocus?: (event?: CustomEvent) => void | undefined;
  onInput?: (event?: CustomEvent) => void | undefined;
};
const TextField: FC<Props> = ({
  id,
  className = "",
  error = "",
  label = "",
  value = "",
  required = false,
  disabled = false,
  onChange = undefined,
}) => {
  const domId = makeRandomString();
  const inputId = id === "" ? makeRandomString() : id;
  return (
    <div id={domId} className={className}>
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>
      <input
        id={inputId}
        className="form-control"
        onChange={onChange}
        value={value}
        disabled={disabled}
        required={required}
      />
      <div>{error}</div>
    </div>
  );
};

export default TextField;
