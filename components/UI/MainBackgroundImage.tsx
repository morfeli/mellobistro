import classNames from "classnames";

type MainBackgroundImageProps = {
  children: React.ReactNode;
};

export const MainBackgroundImage = ({ children }: MainBackgroundImageProps) => {
  return <main className={classNames("bg-wallpaper")}>{children}</main>;
};
