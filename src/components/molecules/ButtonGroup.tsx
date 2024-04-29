import { FC, useEffect } from "react";
import { Button as KucButton } from "kintone-ui-component";
import { makeMargeClassName, makeRandomString } from "../../utils/make";

type Props = {
  confirmText: string;
  cancelText: string;
  className?: string;
  onCancelClick?: (event?: Event) => void | undefined;
  onConfirmClick?: (event?: Event) => void | undefined;
};

const ButtonGroup: FC<Props> = ({
  confirmText,
  cancelText,
  className,
  onConfirmClick = undefined,
  onCancelClick = undefined,
}) => {
  const confirmDomId = makeRandomString();
  const cancelDomId = makeRandomString();
  const createButton = () => {
    const confirmButton = new KucButton({
      text: confirmText,
      type: "submit",
    });
    if (onConfirmClick) {
      confirmButton.addEventListener("click", (event: Event) => {
        onConfirmClick(event);
      });
    }
    const confirmDiv = document.getElementById(confirmDomId);
    confirmDiv?.appendChild(confirmButton);

    const cancelButton = new KucButton({
      text: cancelText,
      type: "normal",
    });
    if (onCancelClick) {
      cancelButton.addEventListener("click", (event: Event) => {
        onCancelClick(event);
      });
    }
    const cancelDiv = document.getElementById(cancelDomId);
    cancelDiv?.appendChild(cancelButton);
  };
  useEffect(() => {
    createButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const c = className || "";
  const combinedClasses = makeMargeClassName("d-flex", c);
  return (
    <div className={combinedClasses}>
      <div id={cancelDomId}></div>
      <div id={confirmDomId}></div>
    </div>
  );
};

export default ButtonGroup;
