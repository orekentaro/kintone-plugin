import { FC } from "react";

type Props = {
  required?: boolean;
  label?: string;
  title?: boolean;
  bold?: boolean;
};
const Label: FC<Props> = ({ label = "", required = false, bold = false }) => {
  const className = bold ? "kintoneplugin-label" : "kintoneplugin-title";
  return (
    <div className={className}>
      {label}
      {required && <span className="kintoneplugin-require">*</span>}
    </div>
  );
};

export default Label;
