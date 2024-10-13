import Link from "next/link";
import { menuLink } from "../common/menuLink";

interface IMenuLink {
  path?: string;
  highlight: boolean;
}

function MenuLink(props: IMenuLink) {
  const { path, highlight = false } = props;

  return (
    <ul className="hidden md:flex gap-4 text-white">
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
              }`} // Condizione per il colore
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
