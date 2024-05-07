import { FC, MouseEventHandler } from "react";
import { makeMargeClassName, makeRandomString } from "../../utils/make";
import Button from "../atoms/Button";

type Props = {
  confirmText: string;
  cancelText: string;
  className?: string;
  onCancelClick?: MouseEventHandler<HTMLButtonElement>;
  onConfirmClick?: MouseEventHandler<HTMLButtonElement>;
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
  const c = className || "";
  const combinedClasses = makeMargeClassName("d-flex", c);
  return (
    <div className={combinedClasses}>
      <Button
        id={cancelDomId}
        text={cancelText}
        onClick={onCancelClick}
        type="cancel"
      />
      <Button
        id={confirmDomId}
        text={confirmText}
        onClick={onConfirmClick}
        type="ok"
      />
    </div>
  );
};

export default ButtonGroup;
