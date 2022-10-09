import { ChildrenProps } from "../../pages";

export const MainBackgroundImage = ({ children }: ChildrenProps) => {
  return <main className="overflow-hidden bg-wallpaper">{children}</main>;
};
