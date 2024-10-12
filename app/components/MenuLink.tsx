import Link from "next/link";

const menuLink = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About me" },
  { href: "/my-work", label: "My Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

interface IMenuLink {
  path?: string;
}

function MenuLink(props: IMenuLink) {
  const { path } = props;

  return (
    <ul className="hidden md:flex gap-4 text-white">
      {menuLink.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="inline-block">
            <span
              className={`inline-block font-['Montserrat'] transition-transform duration-200 ease-in-out transform hover:scale-110 ${
                path === item.href ? "text-[var(--orange)] font-semibold" : ""
              }`}
            >
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuLink;
