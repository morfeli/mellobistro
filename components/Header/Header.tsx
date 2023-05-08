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
        className="fixed z-[60] text-white w-screen transition duration-300 ease-in-out bg-opacity-50 shadow-lg transform-gpu border-b-2 backdrop-blur-sm "
      >
        <div className="flex items-center justify-between w-screen px-6 bg-opacity-40 bg-zinc-800 ">
          <Link href="/">
            <img src="/SVG/logo-pearl.svg" alt="logo" className="w-16 h-16" />
          </Link>

          <MobileMenuBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
          <MobileMenu
            isOpen={isOpen}
            isMobile={isMobile}
            closeMenu={closeMenu}
          />
        </div>
      </motion.header>
    );
  } else {
    return (
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed z-[60] text-white w-screen transition duration-300 ease-in-out bg-opacity-50 shadow-lg transform-gpu border-b-2 backdrop-blur-sm "
      >
        <div className="flex items-center justify-between w-screen px-8 bg-opacity-40 bg-zinc-800 h-[70px]">
          <Link href="/">
            <img src="/SVG/logo-pearl.svg" alt="logo" className="w-24 h-24" />
          </Link>
          <div className="flex items-center justify-between">
            <Navigation />
          </div>
        </div>
      </motion.header>
    );
  }
};
