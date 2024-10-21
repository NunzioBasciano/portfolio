"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const pathname = usePathname();
  const [path, setPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      closeMenu(); // Chiudi il menu se si scrolla
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <header className="p-3 flex items-center justify-between">
      {/* CONTAINER IMAGE/MAIL */}
      <div className="flex items-center gap-4">
        <div className="w-[70px] h-[60px] relative overflow-hidden">
          <Image src="/logo.png" alt="Foto di Nunzio Basciano" layout="fill" />
        </div>
        {/* LINK A FORM SECTION */}
        <Link href={"/"}>
          <p className="hidden md:block text-[var(--orange)] ">
            nunzio.basciano1988@gmail.com
          </p>
        </Link>
      </div>
      <MenuLink highlight={true} path={path} />
      <Hamburger switchMenu={openMenu} />
      <HamburgerMenu isOpen={isOpen}>
        <MenuLink
          highlight={false}
          path={path}
          isMenu={true}
          onClick={closeMenu}
        />
      </HamburgerMenu>
    </header>
  );
};

export default Header;
