import React from "react";
import MenuLink from "./MenuLink";

interface IHamburgerMenu {
  isOpen: boolean;
}

function HamburgerMenu({ isOpen }: IHamburgerMenu) {
  return (
    <>
      {isOpen && (
        <div className="w-full bg-[var(--lightBlue)] fixed top-[74px] p-3">
          <MenuLink></MenuLink>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
