import React from "react";

const cardList = [
  { title: "title 1", href: "https://via.placeholder.com/300" },
  { title: "title 2", href: "https://via.placeholder.com/300" },
  { title: "title 3", href: "https://via.placeholder.com/300" },
  { title: "title 4", href: "https://via.placeholder.com/300" },
  { title: "title 5", href: "https://via.placeholder.com/300" },
  { title: "title 6", href: "https://via.placeholder.com/300" },
];

function Carousel() {
  return (
    <div className="p-3 flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full min-h-[full] rounded-2xl shadow-[0_1px_2px_0_rgba(60,64,67,0.3),_0_2px_6px_2px_rgba(60,64,67,0.15)] custom-scrollbar">
      {cardList.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center w-full min-h-[full] flex-shrink-0 snap-start bg-gray-300 m-2"
        >
          <h3>{item.title}</h3>
          <img
            src={item.href}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
