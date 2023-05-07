import classnames from "classnames";
import Link from "next/link";

type NavItemProps = {
  footer?: boolean;
  isMobile?: boolean;
  link: string;
  closeMenu?: React.MouseEventHandler<HTMLLIElement>;
  children: React.ReactNode;
};

export const NavItem = ({
  isMobile,
  closeMenu,
  children,
  link,
  footer,
}: NavItemProps) => {
  const navItemStyle = classnames(
    "list-none  text-sm tracking-widest font-semibold uppercase mx-4 cursor-pointer after:block after:w-0 after:h-0.5 after:bg-white after:transition-all duration-700 hover:after:w-full",
    {
      "my-4": isMobile,
      "md:mx-8": footer,
      "text-white": footer || isMobile,
      "w-fit": footer,
      "mx-auto": footer,
    }
  );

  return (
    <li className={navItemStyle} onClick={closeMenu}>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </li>
  );
};
