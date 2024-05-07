import { FC } from "react";

type Props = {
  error: string;
  className?: string;
};
const ErrorLabel: FC<Props> = ({ error, className = "" }) => {
  return (
    <div className={className}>
      <div className="kintoneplugin-alert">{error}</div>
    </div>
  );
};

export default ErrorLabel;
