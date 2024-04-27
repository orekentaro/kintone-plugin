// docs
// https://ui-component.kintone.dev/ja/docs/components/desktop/button

import { FC, useEffect } from "react";
import { Button as KucButton, ButtonProps } from "kintone-ui-component";
type Props = ButtonProps & {
  onClick?: (event?: Event) => void | undefined;
};

const Button: FC<Props> = ({
  className = "",
  id = "",
  text = "",
  type = "normal",
  content = "",
  disabled = false,
  visible = true,
  onClick = undefined,
}) => {
  const createButton = () => {
    const button = new KucButton({
      className: className,
      id: id,
      text: text,
      type: type,
      content: content,
      disabled: disabled,
      visible: visible,
    });
    if (onClick) {
      button.addEventListener("click", (event: Event) => {
        onClick(event);
      });
    }

    const div = document.getElementById("button-form-component");
    div?.appendChild(button);
  };
  useEffect(() => {
    createButton();
  });
  return <div id="button-form-component"></div>;
};

export default Button;
