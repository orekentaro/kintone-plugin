import classNames from "classnames";
import { FC, ReactNode } from "react";
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
  // 固定のクラス
  const fixedClasses = "mb-4";

  // propsで渡されたクラス
  const dynamicClasses = className;
  const combinedClasses = classNames(fixedClasses, dynamicClasses);
  return (
    <div className={combinedClasses}>
      <div className={`ms-${ms}`}>{children}</div>
    </div>
  );
};

export default BackGroundColorSpace;
