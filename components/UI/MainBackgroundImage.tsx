type MainBackgroundImageProps = {
  children: React.ReactNode;
};

export const MainBackgroundImage = ({ children }: MainBackgroundImageProps) => {
  return <main className={"bg-wallpaper"}>{children}</main>;
};
