import { FC, useEffect } from "react";
import { Text } from "kintone-ui-component";

type Props = {
  className?: string;
  error?: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  textAlign?: "left" | "right";
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  onChange?: (event?: Event) => void | undefined;
  onFocus?: (event?: Event) => void | undefined;
  onInput?: (event?: Event) => void | undefined;
};
const TextField: FC<Props> = ({
  className = "",
  error = "",
  label = "",
  placeholder = "",
  prefix = "",
  suffix = "",
  textAlign = "left",
  value = "",
  disabled = false,
  requiredIcon = false,
  onChange = undefined,
  onFocus = undefined,
  onInput = undefined,
}) => {
  const createButton = () => {
    const text = new Text({
      className: className,
      error: error,
      label: label,
      placeholder: placeholder,
      prefix: prefix,
      suffix: suffix,
      textAlign: textAlign,
      value: value,
      disabled: disabled,
      requiredIcon: requiredIcon,
    });
    if (onChange) {
      text.addEventListener("change", (event: Event) => {
        onChange(event);
      });
    }

    if (onFocus) {
      text.addEventListener("focus", (event: Event) => {
        onFocus(event);
      });
    }
    if (onInput) {
      text.addEventListener("input", (event: Event) => {
        onInput(event);
      });
    }

    const div = document.getElementById("input-form-component");
    div?.appendChild(text);
  };
  useEffect(() => {
    createButton();
  });
  return <div id="input-form-component"></div>;
};

export default TextField;
