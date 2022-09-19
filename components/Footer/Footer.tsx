import { NavItem } from "../Header/NavItem";

type FooterProps = {
  isMobile: boolean;
};

export const Footer = ({ isMobile }: FooterProps) => {
  return (
    <footer className="flex flex-col items-center">
      <h1>Logo</h1>
      <ul className="text-center">
        <NavItem isMobile={isMobile} link="/">
          Home
        </NavItem>
        <NavItem isMobile={isMobile} link="/about">
          About
        </NavItem>
        <NavItem isMobile={isMobile} link="/menus">
          Menus
        </NavItem>
        <NavItem isMobile={isMobile} link="/events">
          Private Events
        </NavItem>
        <NavItem isMobile={isMobile} link="/gallery">
          Gallery
        </NavItem>
      </ul>
    </footer>
  );
};
