import Link from "next/link";
import { menuLink } from "../common/menuLink";

interface IMenuLink {
  path?: string;
}

function MenuLink(props: IMenuLink) {
  const { path } = props;

  return (
    <ul className="hidden md:flex gap-4 text-white">
      {menuLink.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="">
            <div
              className={` font-['Montserrat'] transform transition-transform duration-300 ease-in-out hover:scale-110 ${
                path === item.href ? "text-[var(--orange)] font-semibold" : ""
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
