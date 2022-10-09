import { ChildrenProps } from "../../pages";

export const MainBackgroundImage = ({ children }: ChildrenProps) => {
  return <main className="bg-wallpaper">{children}</main>;
};
