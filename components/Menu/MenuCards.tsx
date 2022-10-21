type MenuCardsProps = {
  children: React.ReactNode;
};

export const MenuCards = ({ children }: MenuCardsProps) => {
  return <div className="md:flex md:justify-around py-8">{children}</div>;
};
