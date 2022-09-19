import { useState } from "react";
import classnames from "classnames";

import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import { useMelloContext } from "../helper/useMelloContext";

type HeaderProps = {
  isMobile: boolean;
  navBarScrolled: boolean;
};

export const Header = ({ isMobile, navBarScrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };
  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const melloCtx = useMelloContext();

  const toggleMode = () => {
    melloCtx.toggleMode();
  };

  let headerStyles;

  if (navBarScrolled) {
    headerStyles = classnames(
      "bg-gradient-to-r from-white to-black p-2 flex justify-between items-center fixed top-0 z-50 w-screen transition-colors duration-1000"
    );
  } else {
    headerStyles = classnames(
      "bg-gradient-to-r from-linen to-equestrian-green p-2 flex justify-between items-center fixed top-0 z-50 w-screen transition-colors duration-1000"
    );
  }

  return (
    <header className={headerStyles}>
      <h1>Logo</h1>
      <button onClick={toggleMode}>click</button>
      <MobileMenuBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
      <MobileMenu isOpen={isOpen} isMobile={isMobile} closeMenu={closeMenu} />
    </header>
  );
};
