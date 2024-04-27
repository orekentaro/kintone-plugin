import { FC } from "react";

type Props = {
  title: string;
  subTitle: string;
};
const Header: FC<Props> = ({ title, subTitle }) => {
  return (
    <div>
      <div>
        <p className="fs-3 fw-light">{title}</p>
      </div>
      <div className="pb-4">
        <p className="fs-4 fw-light">{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
