import Link from "next/link";
import { menuLink } from "../common/menuLink";

interface IMenuLink {
  path?: string;
  highlight?: boolean;
  isFooter?: boolean;
}

function MenuLink({ path, highlight = false, isFooter = false }: IMenuLink) {
  return (
    <ul className={`gap-4 text-white ${!isFooter ? "hidden md:flex" : "flex"}`}>
      {menuLink.map((item) => (
        <li key={item.label}>
          <Link href={item.href}>
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
