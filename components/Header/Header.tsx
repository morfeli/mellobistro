import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import LogoSVG from "../../public/SVG/logo-army-green.svg";

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

  if (isMobile) {
    return (
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed top-0 z-50 flex items-center justify-between w-screen h-24 p-4 transition-colors duration-1000 bg-gradient-to-b from-white"
      >
        <Image src={LogoSVG} alt="logo" width={100} />
        <div className="flex items-center justify-between">
          {isMobile && (
            <MobileMenuBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
          )}
        </div>
        <MobileMenu isOpen={isOpen} isMobile={isMobile} closeMenu={closeMenu} />
      </motion.header>
    );
  } else {
    return (
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed top-0 z-50 flex items-center justify-between w-screen h-24 p-4 transition-colors duration-1000 bg-gradient-to-b from-white"
      >
        <Image src={LogoSVG} alt="logo" width={150} />
        <div className="flex items-center justify-between">
          <Navigation />
        </div>
      </motion.header>
    );
  }
};
