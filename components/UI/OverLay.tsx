import { ChildrenProps } from "../../pages";

export const OverLay = ({ children }: ChildrenProps) => {
  return <div className="bg-overLay">{children}</div>;
};
