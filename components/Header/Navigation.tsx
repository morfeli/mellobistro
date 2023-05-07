import { NavItem } from "./NavItem";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex">
        <NavItem link="/">Home</NavItem>
        <NavItem link="/about">About</NavItem>
        <NavItem link="/menus">Menus</NavItem>
        <NavItem link="/events">Private Events</NavItem>
        <NavItem link="/gallery">Gallery</NavItem>
        <NavItem link="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
};
