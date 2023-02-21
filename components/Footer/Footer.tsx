import { NavItem } from "../Header/NavItem";
import Image from "next/image";
import LogoWordMark from "../../public/SVG/logo-wordmark-pearl.svg";
import { FacebookSVG } from "../SVGS/FacebookSVG";
import { InstagramSVG } from "../SVGS/Instagram";
import { YelpSVG } from "../SVGS/YelpSVG";
import { UberEatsSVG } from "../SVGS/UberEatsSVG";

type FooterProps = {
  isMobile: boolean;
};

export const Footer = ({ isMobile }: FooterProps) => {
  return (
    <footer className="flex flex-col items-center justify-between pb-4 text-white bg-equestrian-green">
      <div className="mx-auto w-60 md:w-96">
        <Image src={LogoWordMark} alt="Logo word mark" priority />
      </div>
      <ul className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
        <NavItem isMobile={isMobile} link="/" footer>
          Home
        </NavItem>
        <NavItem isMobile={isMobile} link="/about" footer>
          About
        </NavItem>
        <NavItem isMobile={isMobile} link="/menu" footer>
          Menu
        </NavItem>
        <NavItem isMobile={isMobile} link="/events" footer>
          Private Events
        </NavItem>
        <NavItem isMobile={isMobile} link="/gallery" footer>
          Gallery
        </NavItem>
        <NavItem isMobile={isMobile} link="/contact" footer>
          Contact
        </NavItem>
      </ul>
      <div className="flex justify-between pt-8">
        <FacebookSVG />
        <InstagramSVG />
        <YelpSVG />
        <UberEatsSVG />
      </div>
    </footer>
  );
};
