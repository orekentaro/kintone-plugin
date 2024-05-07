import { FC, MouseEventHandler } from "react";
import { makeRandomString } from "../../utils/make";
type Props = {
  text: string;
  type: "normal" | "ok" | "cancel" | "disabled";
  className?: string;
  id?: string;
  content?: string;
  disabled?: boolean;
  visible?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({
  className = "",
  id = "",
  text = "",
  type = "normal",
  disabled = false,
  onClick = undefined,
}) => {
  const domId = makeRandomString();

  return (
    <div id={domId} className={className}>
      <button
        {...(id && { id })}
        className={
          type === "cancel" || type === "ok"
            ? `kintoneplugin-button-dialog-${type}`
            : `kintoneplugin-button-${type}`
        }
        onClick={onClick}
        disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
