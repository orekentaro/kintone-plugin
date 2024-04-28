// docs
// https://ui-component.kintone.dev/ja/docs/components/desktop/text

import { FC, useEffect } from "react";
import { Text, TextProps } from "kintone-ui-component";
import { makeRandomString } from "../../utils/make";

type Props = TextProps & {
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
  const domId = makeRandomString();
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

    const div = document.getElementById(domId);
    div?.appendChild(text);
  };
  useEffect(() => {
    createButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={domId}></div>;
};

export default TextField;
