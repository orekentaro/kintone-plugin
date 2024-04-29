import { FC, ReactNode } from "react";
import { makeMargeClassName } from "../../utils/make";
type Props = {
  className?: string;
  ms?: 0 | 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
};

const BackGroundColorSpace: FC<Props> = ({
  className = "bg-custom-gray",
  ms = 2,
  children,
}) => {
  const combinedClasses = makeMargeClassName("mb-4", className);
  return (
    <div className={combinedClasses}>
      <div className={`ms-${ms}`}>{children}</div>
    </div>
  );
};

export default BackGroundColorSpace;
