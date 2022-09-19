import classnames from "classnames";
import Link from "next/link";

type NavItemProps = {
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
}: NavItemProps) => {
  const navItemStyle = classnames(
    "text-orange-eng list-none tracking-widest uppercase mx-4 cursor-pointer after:block after:w-0 after:h-0.5 after:bg-eerie-black after:transition-all duration-700 hover:after:w-full",
    {
      "my-4": isMobile,
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
