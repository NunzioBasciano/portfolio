"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [path, setPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle the menu state
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <nav className="p-3 flex items-center justify-between ">
      {/* CONTAINER IMAGE/MAIL */}
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] relative overflow-hidden">
          <Image src="/logo.png" alt="Foto di Nunzio Basciano" layout="fill" />
        </div>
        {/* LINK A FORM SECTION */}
        <Link href={"/"}>
          <p className="hidden md:block text-[var(--orange)] ">
            nunzio.basciano1988@gmail.com
          </p>
        </Link>
      </div>
      <MenuLink path={path} />
      <Hamburger switchMenu={openMenu} />
      {/*   <HamburgerMenu isOpen={isOpen} /> */}
    </nav>
  );
};

export default Navbar;
