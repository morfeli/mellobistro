import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "./NavItem";

type MobileMenuProps = {
  isOpen: boolean;
  isMobile: boolean;
  closeMenu: React.MouseEventHandler<HTMLLIElement>;
};

export const MobileMenu = ({
  isOpen,
  isMobile,
  closeMenu,
}: MobileMenuProps) => {
  const navBarVariants = {
    closed: { opacity: 0, x: 100 },
    open: { opacity: 1, x: 0 },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          aria-label="Site Navigation"
          role="navigation"
          variants={navBarVariants}
          initial="closed"
          animate="open"
          transition={{ type: "spring", stiffness: 100 }}
          exit={{ opacity: 0, x: "100%" }}
          className="absolute right-0 px-2 m-2 top-14"
        >
          <ul className="flex flex-col items-center py-2 rounded-lg px-14 justify-evenly bg-linen">
            <NavItem isMobile={isMobile} closeMenu={closeMenu} link="/">
              Home
            </NavItem>
            <NavItem isMobile={isMobile} closeMenu={closeMenu} link="/about">
              About
            </NavItem>
            <NavItem isMobile={isMobile} closeMenu={closeMenu} link="/menus">
              Menus
            </NavItem>
            <NavItem isMobile={isMobile} closeMenu={closeMenu} link="/events">
              Private Events
            </NavItem>
            <NavItem isMobile={isMobile} closeMenu={closeMenu} link="/gallery">
              Gallery
            </NavItem>
            <NavItem isMobile={isMobile} closeMenu={closeMenu} link="/contact">
              Contact
            </NavItem>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};