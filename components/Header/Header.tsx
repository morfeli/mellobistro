import { useState } from "react";

import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";

import { Navigation } from "./Navigation";

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

  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-screen h-24 p-4 transition-colors duration-1000 bg-gradient-to-b from-white">
      <h1>Logo</h1>
      <div className="flex items-center justify-between">
        {isMobile && (
          <MobileMenuBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
        )}
      </div>
      {isMobile ? (
        <MobileMenu isOpen={isOpen} isMobile={isMobile} closeMenu={closeMenu} />
      ) : (
        <Navigation />
      )}
    </header>
  );
};
