import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

export type HeaderProps = {
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
        <Link href="/">
          <img
            src="/SVG/logo-army-green.svg"
            alt="logo"
            className="w-24 h-24"
          />
        </Link>
        <div className="flex items-center justify-between">
          <MobileMenuBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
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
        <Link href="/">
          <img
            src="/SVG/logo-army-green.svg"
            alt="logo"
            className="w-24 h-24"
          />
        </Link>
        <div className="flex items-center justify-between">
          <Navigation />
        </div>
      </motion.header>
    );
  }
};
