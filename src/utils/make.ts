import classNames from "classnames";

export const makeRandomString = () => {
  return Math.random().toString(32).substring(2);
};

export const makeMargeClassName = (
  fixedClasses: string,
  dynamicClasses: string
) => {
  return classNames(fixedClasses, dynamicClasses);
};
