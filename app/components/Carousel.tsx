import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardList = [
  { id: "1", title: "Inventory Management", href: "/SicilyPulse.jpg" },
  { id: "2", title: "Product Management", href: "/inventory-management.png" },
];

function Carousel() {
  return (
    <div className="max-md:mt-3 flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full min-h-[full] custom-scrollbar rounded-xl">
      {cardList.map((item, index) => (
        <div
          key={index}
          className="relative bg-[var(--darBlue)] flex flex-col justify-center items-center w-full min-h-[full] flex-shrink-0 snap-start m-2"
        >
          <div className="relative w-full  mx-auto h-64 md:h-full md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
            <Link href={`/my-work/${item.id}`}>
              <Image
                src={item.href}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl bg-[var(--darkBlue)]"
              />
            </Link>
          </div>
          <h3 className="absolute top-[90%] text-[var(--darkBlue)] font-bold text-xl mt-2">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
