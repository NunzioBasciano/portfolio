import Image from "next/image";
import Link from "next/link";

const menuLink = [
  { href: "about-me", label: "About me" },
  { href: "my-work", label: "My Work" },
  { href: "skills", label: "Skills" },
  { href: "contact", label: "Contact" },
  { href: "resume", label: "Resume" },
];

const Navbar = () => {
  return (
    <nav className="p-3 flex items-center justify-between">
      {/* CONTAINER IMAGE/MAIL */}
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-full relative overflow-hidden">
          <Image
            className="rounded-lg"
            src="/nunzioBasciano-foto.jpg"
            alt="Foto di Nunzio Basciano"
            layout="fill"
            style={{
              transform: "scale(1.5)",
              left: "-3px",
              top: "5px",
            }}
          />
        </div>
        {/* LINK A FORM SECTION */}
        <Link href={"/"}>
          <h3 className="hidden md:block">nunzio.basciano1988@gmail.com</h3>
        </Link>
      </div>
      <ul className="flex gap-4 text-white">
        {menuLink.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="inline-block">
              <span className="font-['Montserrat'] inline-block transition-transform duration-200 ease-in-out transform hover:scale-110">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
