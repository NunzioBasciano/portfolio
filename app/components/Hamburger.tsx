import Image from "next/image";
import React from "react";

interface IHamburger {
  switchMenu: () => void;
}

function Hamburger(props: IHamburger) {
  const { switchMenu } = props;
  return (
    <div onClick={switchMenu} className="md:hidden">
      <Image
        className="rounded-lg"
        src="/hamburger.png"
        alt="hamburger menu"
        width={40}
        height={40}
      />
    </div>
  );
}

export default Hamburger;
