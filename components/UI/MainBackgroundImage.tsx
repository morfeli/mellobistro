import { ChildrenProps } from "../../pages";
import classNames from "classnames";

type MainBackgroundImageProps = {
  children: React.ReactNode;
  isMobile?: boolean;
};

export const MainBackgroundImage = ({
  children,
  isMobile,
}: MainBackgroundImageProps) => {
  return (
    <main
      className={classNames("overflow-hidden bg-wallpaper", {
        "overflow-y-scroll": !isMobile,
      })}
    >
      {children}
    </main>
  );
};
