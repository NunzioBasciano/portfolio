import React from "react";

const cardList = [
  { title: "title 1", href: "./" },
  { title: "title 2", href: "./" },
  { title: "title 3", href: "./" },
  { title: "title 4", href: "./" },
  { title: "title 5", href: "./" },
  { title: "title 6", href: "./" },
];

function Carousel() {
  return (
    <div className="flex overflow-x-auto w-full min-h-full shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] rounded-2xl">
      {cardList.map((item, index) => (
        <div
          key={index}
          className="w-full h-full flex justify-center items-center flex-shrink-0"
        >
          <h3>{item.title}</h3>
          <img src={item.href} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
