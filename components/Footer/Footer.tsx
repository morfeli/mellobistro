import { NavItem } from "../Header/NavItem";

type FooterProps = {
  isMobile: boolean;
};

export const Footer = ({ isMobile }: FooterProps) => {
  return (
    <footer className="flex flex-col items-center text-white bg-equestrian-green">
      <h1>Logo</h1>
      <ul className="text-center">
        <NavItem isMobile={isMobile} link="/" footer>
          Home
        </NavItem>
        <NavItem isMobile={isMobile} link="/about" footer>
          About
        </NavItem>
        <NavItem isMobile={isMobile} link="/menus" footer>
          Menus
        </NavItem>
        <NavItem isMobile={isMobile} link="/events" footer>
          Private Events
        </NavItem>
        <NavItem isMobile={isMobile} link="/gallery" footer>
          Gallery
        </NavItem>
      </ul>
    </footer>
  );
};
