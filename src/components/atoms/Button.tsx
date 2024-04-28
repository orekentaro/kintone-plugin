// docs
// https://ui-component.kintone.dev/ja/docs/components/desktop/button

import { FC, useEffect } from "react";
import { Button as KucButton, ButtonProps } from "kintone-ui-component";
import { makeRandomString } from "../../utils/make";
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
  const domId = makeRandomString();
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

    const div = document.getElementById(domId);
    div?.appendChild(button);
  };
  useEffect(() => {
    createButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={domId}></div>;
};

export default Button;
