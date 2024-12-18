import Link from "next/link";
import { menuLink } from "../common/menuLink";

interface IMenuLink {
  path?: string;
  highlight?: boolean;
  isFooter?: boolean;
  isMenu?: boolean;
  onClick?: () => void;
}

function MenuLink(props: IMenuLink) {
  const {
    path,
    highlight = false,
    isFooter = false,
    isMenu = false,
    onClick,
  } = props;

  return (
    <ul
      className={`gap-4 text-white ${
        isMenu ? "block z-20" : !isFooter ? "hidden md:flex" : "flex"
      } ${
        isMenu ? "flex flex-col gap-8 z-50 text-xl text-[var(--orange)]" : ""
      }`}
    >
      {menuLink.map((item) => (
        <li key={item.label}>
          <Link href={item.href} onClick={onClick}>
            <div
              className={`font-['Montserrat'] transform transition-transform duration-300 ease-in-out ${
                highlight ? "hover:scale-110" : ""
              } ${
                path === item.href && highlight
                  ? "text-[var(--orange)] font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuLink;
