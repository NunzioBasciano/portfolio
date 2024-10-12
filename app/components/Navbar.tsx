"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuLink from "./MenuLink";

const Navbar = () => {
  const pathname = usePathname();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

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
          <h3 className="hidden lg:block">nunzio.basciano1988@gmail.com</h3>
        </Link>
      </div>
      <MenuLink path={path} />
    </nav>
  );
};

export default Navbar;
