import { useState } from "react";
import { motion } from "framer-motion";
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

  const toggleSwitchVariants = {
    initial: { x: 0 },
    animate: { x: 30 },
  };

  let headerStyles;

  if (navBarScrolled) {
    headerStyles = classnames(
      "bg-red-300 p-4 flex justify-between items-center fixed top-0 z-50 w-screen transition-colors duration-1000"
    );
  } else {
    headerStyles = classnames(
      "bg-eerie-black p-4 flex justify-between items-center fixed top-0 z-50 w-screen transition-colors duration-1000"
    );
  }

  return (
    <header className={headerStyles}>
      <h1>Logo</h1>
      <div className="flex items-center justify-between w-24">
        <button
          onClick={toggleMode}
          className="flex items-center justify-start p-1 bg-slate-300 w-14 rounded-2xl"
        >
          <motion.div
            variants={toggleSwitchVariants}
            initial={"initial"}
            animate={melloCtx.mode ? "animate" : "initial"}
            className="w-4 h-4 bg-white rounded-full"
          ></motion.div>
        </button>
        <MobileMenuBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
      </div>
      <MobileMenu isOpen={isOpen} isMobile={isMobile} closeMenu={closeMenu} />
    </header>
  );
};
