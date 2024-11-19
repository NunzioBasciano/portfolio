import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ICarousel } from '../common/interfaces';

function Carousel(props: ICarousel) {
  const { projects, detailProject } = props;
  return (
    <div className="max-md:mt-3 flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full min-h-[full] custom-scrollbar rounded-xl">
      {projects &&
        projects.map((item, index) => (
          <div
            key={index}
            className="relative bg-[var(--darBlue)] flex flex-col justify-center items-center w-full min-h-[full] flex-shrink-0 snap-start m-2 overflow-hidden"
          >
            <div className="relative w-full  mx-auto h-64 md:h-full md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
              <Link href={`/my-work/${item.id}`}>
                <Image
                  src={item.href}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl bg-[var(--darkBlue)]"
                />
              </Link>
            </div>
          </div>
        ))}
      {detailProject &&
        detailProject.map((item, index) => (
          <div
            key={index}
            className="relative bg-[var(--darBlue)] flex flex-col justify-center items-center w-full min-h-[full] flex-shrink-0 snap-start m-2"
          >
            <div className="relative w-full  mx-auto h-64 md:h-full md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-xl bg-[var(--darkBlue)]"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Carousel;
