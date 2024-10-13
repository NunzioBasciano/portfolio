"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuLink from "./MenuLink";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <footer className="flex flex-col items-center">
      <div className="w-[70px] h-[60px] m-6 relative overflow-hidden ">
        <Image src="/logo.png" alt="Foto di Nunzio Basciano" layout="fill" />
      </div>
      <MenuLink highlight={false} isFooter={true} path={path} />
      <small className="m-6 text-[var(--orange)]">
        © 2024 All Rights Reserved by ThemeJunction
      </small>
    </footer>
  );
}

export default Footer;
