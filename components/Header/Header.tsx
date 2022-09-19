import MobileMenuBtn from "./MobileMenuBtn";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenuHandler = () => {
    setIsOpen((current) => !current);
  };

  return (
    <header className="bg-gradient-to-r from-linen to-equestrian-green p-2 flex justify-between items-center">
      <h1>Logo</h1>
      <MobileMenuBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
    </header>
  );
};
