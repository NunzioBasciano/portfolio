import React from "react";

interface IHamburgerMenu {
  isOpen: boolean;
  children: React.ReactNode;
}

function HamburgerMenu(props: IHamburgerMenu) {
  const { isOpen, children } = props;
  return (
    <>
      {isOpen && (
        <div className="w-full bg-[var(--darkBlue)] fixed top-[74px] left-0 p-6 text-center shadow-[0_2px_6px_0_rgba(60,64,67,0.15)] z-[9999]">
          {children}
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
